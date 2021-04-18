
# pandas
import pandas as pd

# numpy
import numpy as np

# scikit
from sklearn.preprocessing import scale
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import MinMaxScaler
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split

import category_encoders as ce
import warnings

warnings.filterwarnings('ignore')

# load .csv
print('loading data...', end='')
preData = pd.read_csv('./data/raw/weatherAUS.csv')
print('done!')

# scaling data
print('scaling data...', end='')
preData = preData.sample(frac=1.0)
print('done!')


# dropping Date columns
print('dropping date...', end='')
preData.pop('Date')
print('done!')

# split training / testing data
print('splitting training / testing data', end='')
X = preData.drop(['RainTomorrow'], axis=1)
y = preData.pop('RainTomorrow')

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)
print('done!')

# feature engineering missing numerical data
print('feature engineering missing numerical data...',end='')
numerical = [col for col in X_train.columns if X_train[col].dtypes != 'O']
for df1 in [X_train, X_test]:
    for col in numerical:
        col_median=X_train[col].median()
        df1[col].fillna(col_median, inplace=True)
print('done')

# feature engineering missing catergorical data
print('feature engineering missing catergorical data...', end="")
for df2 in [X_train, X_test]:
    df2['WindGustDir'].fillna(X_train['WindGustDir'].mode()[0], inplace=True)
    df2['WindDir9am'].fillna(X_train['WindDir9am'].mode()[0], inplace=True)
    df2['WindDir3pm'].fillna(X_train['WindDir3pm'].mode()[0], inplace=True)
    df2['RainToday'].fillna(X_train['RainToday'].mode()[0], inplace=True)

print('done')

print('feature engineer: remove samples with no label', end='')
# guessing on missing features, this is probably bad
for sample in [y_train, y_test]:
    sample.fillna(y_train.mode()[0], inplace=True)
print('done')

# engineering numerical outliers
print('feature engineering: numerical outliers...',end='')
def max_value(df3, variable, top):
    return np.where(df3[variable]>top, top, df3[variable])

for df3 in [X_train, X_test]:
    df3['Rainfall'] = max_value(df3, 'Rainfall', 3.2)
    df3['Evaporation'] = max_value(df3, 'Evaporation', 21.8)
    df3['WindSpeed9am'] = max_value(df3, 'WindSpeed9am', 55)
    df3['WindSpeed3pm'] = max_value(df3, 'WindSpeed3pm', 57)
print('done!')

print('feature engineering: nominal data encoding...', end='')
encoder = ce.BinaryEncoder(cols=['RainToday'])
X_train = encoder.fit_transform(X_train)
X_test = encoder.transform(X_test)

X_train = pd.concat([X_train[numerical], X_train[['RainToday_0', 'RainToday_1']],
                     pd.get_dummies(X_train.Location), 
                     pd.get_dummies(X_train.WindGustDir),
                     pd.get_dummies(X_train.WindDir9am),
                     pd.get_dummies(X_train.WindDir3pm)], axis=1)

X_test = pd.concat([X_test[numerical], X_test[['RainToday_0', 'RainToday_1']],
                     pd.get_dummies(X_test.Location), 
                     pd.get_dummies(X_test.WindGustDir),
                     pd.get_dummies(X_test.WindDir9am),
                     pd.get_dummies(X_test.WindDir3pm)], axis=1)
print('done!')

print('feature engineering: scaling...', end="")
cols = X_train.columns
scaler = MinMaxScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

X_train = pd.DataFrame(X_train, columns=[cols])
X_test = pd.DataFrame(X_test, columns=[cols])
print('done!')

print('saving cleaned data...', end="")
X_train.to_csv('X_train_lite.csv')
X_test.to_csv('X_test_lite.csv')
y_train.to_csv('y_train_lite.csv')
y_test.to_csv('y_test_lite.csv')
print('done!')


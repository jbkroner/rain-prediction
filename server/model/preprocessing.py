
# pandas
import pandas as pd


# scikit
from sklearn.preprocessing import scale
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

# load .csv
print('loading data...', end='')
preData = pd.read_csv('./data/raw/weatherAUS.csv')
print('done!')

# scaling data
print('scaling data...', end='')
preData = preData.sample(frac=.10)
print('done!')

# dropping indepdent columns
print('dropping indepdent columns...', end='')
preData.pop('Date')
print('done!')

# reformatting columns recorded as string that should be numeric
print('string to numeric translation...', end='')
preData['WindDir9am'] = pd.to_numeric(preData['WindDir9am'], errors='coerce')
preData['WindDir3pm'] = pd.to_numeric(preData['WindDir3pm'], errors='coerce')
print('done')


# separate target
print('separating target...', end='')
y = preData.pop('RainTomorrow')
print('done!')

# handle missing data:  replace with mean data
print('handling missing data...', end="")
for feature in preData:
    if preData[feature].dtype==float:
        m = preData[feature].mean()
        preData[feature].fillna(m, inplace=True)
    else:
        mo = preData[feature].mode()[0]
        preData[feature].fillna(mo, inplace=True)
print('done!')

# encode nominal features
# handling catergorial features
print('handling catergorial features...', end='')
nominalData = [] # append indeces here

for i in range(len(preData.dtypes)):
    if preData.dtypes[i]==object:
#        print('------(+) ' + str(preData.columns[i]))
        nominalData.append(i)
# print(' ' + str(len(nominalData)) + ' features found!') 

# build the ct
ct = ColumnTransformer([('e', OneHotEncoder(handle_unknown='ignore'), nominalData)], remainder='passthrough')
ohe = ct.fit_transform(preData)
X = pd.DataFrame.sparse.from_spmatrix(ohe, columns = ct.get_feature_names(), index = preData.index)
print('done!')


print('saving cleaned data...', end="")
X.to_csv('data-cleaned-X.csv')
y.to_csv('data-cleaned-y.csv')
print('done!')












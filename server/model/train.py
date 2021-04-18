import pandas as pd

from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import cross_val_score
from sklearn.metrics import accuracy_score

from joblib import dump, load

X_train = pd.read_csv('./X_train_lite.csv')
y_train = pd.read_csv('./y_train_lite.csv', index_col=False)
X_test = pd.read_csv('./X_test_lite.csv')
y_test = pd.read_csv('./y_test_lite.csv', index_col=False)
model = LogisticRegression(solver='liblinear', random_state=0, verbose=2)

print(y_train['RainTomorrow'])

model.fit(X_train, y_train['RainTomorrow'])

print('pickling model...',end='')
dump(model, 'model-trained-1.joblib')
print('done!')

print('testing model...')
y_pred_test = model.predict(X_test)
print('Model accuracy score: {0:0.4f}'.format(accuracy_score(y_test['RainTomorrow'], y_pred_test)))

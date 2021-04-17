


import pandas as pd

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import cross_val_score

from joblib import dump, load

X = pd.read_csv('./data-cleaned-X.csv')
y = pd.read_csv('./data-cleaned-y.csv')

print('training model!')
parameters = {'min_samples_leaf':[2, 4, 6, 8, 10, 11, 12, 13, 14, 15, 16, 18, 20], 'n_estimators':[20,40,60,80,100,120,140]}
rf = RandomForestClassifier()
parameter_search = GridSearchCV(rf, parameters, cv=10, scoring="roc_auc", refit=True, verbose=2, n_jobs=2)
parameter_search.fit(X, y)

meta = GridSearchCV(rf, parameters, cv=5, scoring="roc_auc", refit=True)
results = cross_val_score(meta, X, y, cv=10, scoring="roc_auc", verbose=2, n_jobs=2)
print('done!') 

print(results)

print('pickling model...',end='')
dump(rf, 'model-trained-1.joblib')
print('done!')

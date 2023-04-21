import os
import pandas as pd

# Load the dataframe
df = pd.read_csv('./data/embeddings.csv')

for column in df.columns:
    if df[column].shape == (df[column].shape[0],):
        print(f'The {column} column is 1D')
    else:
        print(f'The {column} column is not 1D')
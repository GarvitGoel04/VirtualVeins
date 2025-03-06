Python 3.12.4 (tags/v3.12.4:8e8a4ba, Jun  6 2024, 19:30:16) [MSC v.1940 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> import pandas as pd
... import seaborn as sns
... import matplotlib.pyplot as plt
... from textblob import TextBlob
... 
... file_path = 'D:\\VirtualVeins\\Data\\SocialMediaData.xlsx'
... data = pd.read_excel(file_path)
... 
... def analyze_sentiment(text):
...     if pd.isnull(text):
...         return None
...     analysis = TextBlob(text)
...     return analysis.sentiment.polarity
... 
... data['Sentiment Score'] = data['Post Content'].apply(analyze_sentiment)
... 
... sns.histplot(data['Sentiment Score'], kde=True, bins=20, color='blue')
... plt.title('Sentiment Score Distribution')
... plt.xlabel('Sentiment Score')
... plt.ylabel('Frequency')
... plt.show()
... 
... output_path = 'D:\\VirtualVeins\\Data\\Processed_SocialMediaData.xlsx'
... data.to_excel(output_path, index=False)

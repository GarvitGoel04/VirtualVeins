import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from textblob import TextBlob

file_path = 'D:\\VirtualVeins\\Data\\DataSet_1.xlsx'
data = pd.read_excel(file_path)

def analyze_sentiment(text):
    if pd.isnull(text):
        return None
    analysis = TextBlob(str(text))  # Convert text to string
    return analysis.sentiment.polarity

data['Sentiment Score'] = data['10. How often do you get distracted by Social media when you are busy doing something?'].apply(analyze_sentiment)

sns.histplot(data['Sentiment Score'], kde=True, bins=20, color='blue')
plt.title('Sentiment Score Distribution')
plt.xlabel('Sentiment Score')
plt.ylabel('Frequency')
plt.show()

output_path = 'D:\\VirtualVeins\\Data\\Processed_SocialMediaData.xlsx'
data.to_excel(output_path, index=False)
print(data.columns)

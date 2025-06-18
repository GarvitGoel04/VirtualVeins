import pandas as pd
import scipy.stats as stats
import pingouin as pg
import seaborn as sns
import matplotlib.pyplot as plt

# 1. Load Data (use raw string to avoid escape warnings)
df = pd.read_excel(r"D:\VirtualVeins\Data\SocialMediaData.xlsx")

# 2. Rename columns
df.rename(columns={
    "Do you use social media?": "use_social_media",
    "What social media platforms do you commonly use?": "platforms_used",
    "What is the average time you spend on social media every day?": "time_spent"
}, inplace=True)

df.rename(columns={
    "6. Do you use social media?": "use_social_media",
    "7. What social media platforms do you commonly use?": "platforms_used",
    "8. What is the average time you spend on social media every day?": "time_spent"
}, inplace=True)

# 3. Convert yes/no to binary
df['use_sm_binary'] = df['use_social_media'].map({'Yes': 1, 'No': 0})

# 4. Convert "Between 2 and 3 hours", "More than 5 hours", etc. to numeric
def convert_time_spent(val):
    if not isinstance(val, str):
        return None
    
    text = val.lower().strip()
    if "hours" in text:
        text = text.split("hours")[0].strip()

    if "less than an hour" in text:
        return 0.5
    elif "between 1 and 2" in text:
        return 1.5
    elif "between 2 and 3" in text:
        return 2.5
    elif "between 3 and 4" in text:
        return 3.5
    elif "between 4 and 5" in text:
        return 4.5
    elif "more than 5" in text:
        return 6.0
    else:
        return None

df['time_spent_numeric'] = df['time_spent'].apply(convert_time_spent)

# 5. Categorize usage based on numeric hours
def categorize_usage(hours):
    if hours is None:
        return 'Unknown'
    elif hours == 0:
        return 'NoUse'
    elif 0 < hours <= 2:
        return 'Light'
    elif 2 < hours <= 4:
        return 'Moderate'
    elif 4 < hours < 6:
        return 'Heavy'
    else:
        return 'VeryHeavy'

df['usage_group'] = df['time_spent_numeric'].apply(categorize_usage)

# (Optional) Uncomment if you want to see how many in each group:
# print(df['usage_group'].value_counts())

# 6. Create mental health indices
df['depression_index'] = (
    df['18. How often do you feel depressed or down?'] +
    df['19. On a scale of 1 to 5, how frequently does your interest in daily activities fluctuate?']
)

df['anxiety_index'] = (
    df['12. On a scale of 1 to 5, how easily distracted are you?'] +
    df['13. On a scale of 1 to 5, how much are you bothered by worries?']
)

# 7. ANOVA for depression_index by usage_group
groups = df['usage_group'].unique()
group_data = [df[df['usage_group'] == g]['depression_index'] for g in groups]

f_stat, p_val = stats.f_oneway(*group_data)

print("=== ANOVA for depression_index by usage_group ===")
print("F-statistic:", f_stat, "| p-value:", p_val)

# 8. Tukey Post-hoc test (pairwise comparisons)
posthoc = pg.pairwise_tukey(dv='depression_index', between='usage_group', data=df)
print("\n=== Tukey Post-hoc for depression_index ===")
print(posthoc)

# 9. Correlation heatmap (time spent vs. depression vs. anxiety)
corr_data = df[['time_spent_numeric', 'depression_index', 'anxiety_index']]
print("\n=== Correlation Matrix ===")
print(corr_data.corr())

sns.heatmap(corr_data.corr(), annot=True, cmap='coolwarm')
plt.title("Correlation Heatmap")
plt.show()

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Step 1: Data Collection
# Simulated dataset for demonstration
data = {
    'Region': ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Australia'],
    'Employee_Count': [500, 400, 600, 300, 200, 150],
    'Job_Satisfaction': [3.8, 3.6, 4.1, 3.5, 3.2, 3.9],  # On a scale of 1 to 5
    'Retention_Rate': [0.85, 0.80, 0.88, 0.75, 0.70, 0.82],  # Percentage
    'Productivity_Score': [78, 74, 82, 70, 65, 77],  # Out of 100
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Step 2: Data Processing
df['Engagement_Score'] = (df['Job_Satisfaction'] + df['Retention_Rate']*5 + df['Productivity_Score']/20) / 3
df['Region'] = df['Region'].astype('category')

# Step 3: Analysis
# Calculate summary statistics
summary_stats = df.describe()

# Identify regions with the highest and lowest engagement scores
highest_engagement = df.loc[df['Engagement_Score'].idxmax()]
lowest_engagement = df.loc[df['Engagement_Score'].idxmin()]

# Step 4: Visualization
# Engagement Score by Region
plt.figure(figsize=(10, 6))
sns.barplot(x='Region', y='Engagement_Score', data=df, palette='viridis')
plt.title('Engagement Score by Region')
plt.xlabel('Region')
plt.ylabel('Engagement Score')
plt.show()

# Correlation Matrix
plt.figure(figsize=(8, 5))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Correlation Matrix of Engagement Metrics')
plt.show()

# Step 5: Report Generation
report = f"""
HR Strategy Analysis on Talent Engagement

Summary Statistics:
{summary_stats}

Regions with Highest Engagement:
{highest_engagement['Region']}
Engagement Score: {highest_engagement['Engagement_Score']:.2f}

Regions with Lowest Engagement:
{lowest_engagement['Region']}
Engagement Score: {lowest_engagement['Engagement_Score']:.2f}

Insights:
- Focus on improving engagement in regions with low scores like {lowest_engagement['Region']}.
- Consider replicating successful engagement strategies from regions like {highest_engagement['Region']}.

Visualization has been generated to support further analysis.
"""

print(report)

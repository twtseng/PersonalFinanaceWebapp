# PersonalFinanceWebapp

This app is a tool to import my personal finance data (bank statements) into a SQL database for pivot table analysis.

The bank statements are uploaded to an Azure storage container, where they are processed by a Azure function app and loaded into an Azure SQL database. The data is categorized using custom SQL stored procedures.

The tool is online at: https://twtseng-personalfinance.azurewebsites.net/

NOTE: The full data is only visible to me. Guest users will see masked text and artificially scaled numbers, but the proportions (percentages) between the numbers are preserved. 

remote_origin: New Line 3/17/21 9:51 AM

import sys
import pandas as pd

def readInput(filename, max_rows, max_cols, title_row):

    columns_to_read = f'A:{max_cols}'
    print(columns_to_read)
    
    if title_row == "Y":

        data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read, skiprows=1)
    elif title_row == "n":
        data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read)

    else:
        print("Unrecognised input")
    clean_data = data.dropna(axis=0, how='all').dropna(axis=1, how='all')


    fields_to_search = ["age", "height", "religion", "race", "ethical background", "sex", "Gender", "Rounded Age"]

    matching_fields = []
    
    for col in clean_data.columns:
        print("column:  " + col)
        for field in fields_to_search:
            print("field:  " + field)
            if field.lower() in col.lower():
                matching_fields.append(col)
                break

    if matching_fields:
        print(f"Fields matching criteria: {matching_fields}")

        # Count unique values in matching fields
        for field in matching_fields:
            unique_values = data[field].dropna().unique()
            print(f"\nField: {field}")
            print(f"Unique Values: {unique_values}")
            print(f"Value Counts:\n{data[field].value_counts()}")
    else:
        print("No matching fields found.")



    #print(data)

if __name__ == "__main__":

    input_file = "test_baby_data.xls"

    max_rows = int(input("Enter the last row with data to read to:  "))

    max_cols = (input("Enter the last column with data to read to:  ")).upper()

    title_row = (input("Is there a title row Y/n: "))

    readInput(input_file, max_rows, max_cols,title_row)

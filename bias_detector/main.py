import sys
import pandas as pd

def readInput(filename, max_rows, max_cols, title_row):

    columns_to_read = f'A:{max_cols}'
    print(columns_to_read)

    filetype = filename[-3:].lower()
    if filetype == "xls":
        if title_row == "Y":
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read, skiprows=1)
        elif title_row == "n":
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read)

    elif filetype == "csv":
        data = pd.read_csv(filename)

        
    else:
        print("Unrecognised input")
    clean_data = data.dropna(axis=0, how='all').dropna(axis=1, how='all')


    fields_to_search = ["age", "height", "ethnicity", "religion", "race", "ethical background", "sex", "Gender"]

    matching_fields = []
    
    for col in clean_data.columns:
        for field in fields_to_search:
            if field.lower() in col.lower():
                print(field)
                print(col)
                matching_fields.append(col)
                break

    difference_threshold = 1.1
    if matching_fields:
        print(f"Fields matching criteria: {matching_fields}")

        # Count unique values in matching fields
        for field in matching_fields:
            unique_values = data[field].dropna().unique()
            print(f"\nField: {field}")
            print(f"Unique Values: {unique_values}")
            print(f"Value Counts:\n{data[field].value_counts()}")
    # Check if the max value is 10% greater than the next highest
            value_counts = data[field].value_counts()
            max_value_field = value_counts.idxmax()
            max_value = value_counts.max()
            second_max_value = value_counts.nlargest(2).iloc[1]
            if (max_value / second_max_value) > difference_threshold:
                print(f"The count for {max_value_field} in {field} is disproportionately greater. Have you considered the effects of this?")

    else:
        print("No matching fields found.")





    #print(data)

if __name__ == "__main__":

    input_file = "liver_gender.csv"

    if input_file[-3:] == "xls":
        max_rows = int(input("Enter the last row with data to read to:  "))

        max_cols = (input("Enter the last column with data to read to:  ")).upper()

        title_row = (input("Is there a title row Y/n: "))
    else:
        max_rows = 0
        max_cols = 0
        title_row = "n"
    readInput(input_file, max_rows, max_cols,title_row)


import sys
import os
import pandas as pd
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS  # Add this import
from werkzeug.utils import secure_filename

app = Flask(__name__, static_folder='static')
CORS(app)
@app.route('/', methods=['GET'])
def intro():
    print("intro")
    return render_template('intro.html')

def process_file(filename, max_rows, max_cols, title_row):
    print("processing file")

    columns_to_read = f'A:{max_cols}'

    filetype = filename[-3:].lower()
    if filetype == "xls":
        if title_row == "Y":
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read, skiprows=1)
        elif title_row == "n":
            data = pd.read_excel(filename, nrows=max_rows, usecols=columns_to_read)

    elif filetype == "csv":
        data = pd.read_csv(filename)
        print("csv detected")

        
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
    result = []
    if matching_fields:
        print(f"Fields matching criteria: {matching_fields}")

        # Count unique values in matching fields
        for field in matching_fields:
            unique_values = data[field].dropna().unique()
            result.append(f"\nField: {field}")
            result.append(f"Unique Values: {unique_values}")
            result.append(f"Value Counts:\n{data[field].value_counts()}")
    # Check if the max value is 10% greater than the next highest
            value_counts = data[field].value_counts()
            max_value_field = value_counts.idxmax()
            max_value = value_counts.max()
            second_max_value = value_counts.nlargest(2).iloc[1]
            
            if (max_value / second_max_value) > difference_threshold:
                result.append(f"The count for {max_value_field} in {field} is disproportionately greater. Have you considered the effects of this?")

    else:
        result.append("No matching fields found.")
    return jsonify(result=result)

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    print("check 1")
    if 'file' in request.files:
        print("check 2")
        file = request.files['file']
        if file:
            print("check 3")
            file_path = os.path.join("project_website", "website", "real", "uploads", secure_filename(file.filename))
            file.save(file_path)

            max_rows = int(request.form['max_rows'])
            max_cols = request.form['max_cols'].upper()
            title_row = request.form['title_row']

            # Call your existing processing function
            result = process_file(file_path, max_rows, max_cols, title_row)

            os.remove(file_path)  # Remove the uploaded file after processing

            return jsonify(result=result)
    return jsonify(error="File not found"), 400


@app.route('/datasetReview', methods=['GET'])
def dataset_review():
    # Retrieve and pass data for dataset review
    return render_template('review.html')

if __name__ == '__main__':
    print("hello")
    CORS(app)  # Enable CORS for all routes
    app.run(debug=True)
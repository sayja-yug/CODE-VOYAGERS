from flask import Flask, render_template

app = Flask(__name__)

# Define the class schedule data
schedules = {
    '2025': {
        'Semester 1': [
            {'day': "Monday", 'subjects': ["Maths", "Physics", "HSS", "CP", "Break", "Lab I", "Lab II"], 'teachers': ["Mr. A", "Ms. B", "Dr. C", "Mr. D", "", "Ms. E", "Dr. F"]},
            {'day': "Tuesday", 'subjects': ["CP", "I to I", "Physics", "Maths", "Break", "Lab I", "Lab II"], 'teachers': ["Mr. D", "Mr. H", "Ms. B", "Mr. A", "", "Dr. F", "Ms. E"]},
            # Add more days...
        ],
        'Semester 2': [
            {'day': "Monday", 'subjects': ["Biology", "Chemistry", "HSS", "CP", "Break", "Lab I", "Lab II"], 'teachers': ["Mr. Z", "Ms. Y", "Dr. C", "Mr. D", "", "Ms. E", "Dr. F"]},
            # Add more days...
        ]
    },
    # You can add more years and schedules here
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/schedule/<int:year>/<semester>')
def class_schedule(year, semester):
    # Generate the schedule for the given year and semester
    year_key = str(year)
    if year_key in schedules:
        if semester in schedules[year_key]:
            return {"schedule": schedules[year_key][semester]}
        else:
            return {"error": f"Semester {semester} not found"}
    else:
        return {"error": f"Year {year} not found"}

if __name__ == "__main__":
    app.run(debug=True)

CREATE TABLE class_schedule (
  id INT AUTO_INCREMENT PRIMARY KEY,
  semester_id INT,
  day_id INT,
  period_number INT, -- Period 1 to 7
  subject VARCHAR(100),
  teacher VARCHAR(100),
  is_break BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (semester_id) REFERENCES semesters(id),
  FOREIGN KEY (day_id) REFERENCES days(id)
);

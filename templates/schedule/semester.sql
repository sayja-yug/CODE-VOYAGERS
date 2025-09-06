CREATE TABLE semesters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  year_id INT,
  name VARCHAR(20) NOT NULL, -- e.g., 'Semester 1', 'Semester 2'
  FOREIGN KEY (year_id) REFERENCES years(id)
);

-- Semester 1 ka ID maan lo 1 hai
-- Monday ka ID maan lo 1 hai

INSERT INTO class_schedule (semester_id, day_id, period_number, subject, teacher, is_break)
VALUES
(1, 1, 1, 'Maths', 'Mr. A', FALSE),
(1, 1, 2, 'Physics', 'Ms. B', FALSE),
(1, 1, 3, 'HSS', 'Dr. C', FALSE),
(1, 1, 4, 'CP', 'Mr. D', FALSE),
(1, 1, 5, 'Break', '', TRUE),
(1, 1, 6, 'Lab I', 'Ms. E', FALSE),
(1, 1, 7, 'Lab II', 'Dr. F', FALSE);

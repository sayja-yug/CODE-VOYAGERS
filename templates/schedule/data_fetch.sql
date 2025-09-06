SELECT d.name AS day, cs.period_number, cs.subject, cs.teacher, cs.is_break
FROM class_schedule cs
JOIN semesters s ON cs.semester_id = s.id
JOIN years y ON s.year_id = y.id
JOIN days d ON cs.day_id = d.id
WHERE y.name = 'Year 1' AND s.name = 'Semester 1'
ORDER BY d.id, cs.period_number;

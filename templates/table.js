function generateScheduleRows(year, semester) {
  const schedules = {
    'Year 1': {
      'Semester 1': [
        { day: "Monday", subjects: ["Maths", "Physics", "HSS", "CP", "Break", "Lab I", "Lab II"], teachers: ["Mr. A", "Ms. B", "Dr. C", "Mr. D", "", "Ms. E", "Dr. F"] },
        { day: "Tuesday", subjects: ["CP", "Intro to IT", "Physics", "Maths", "Break", "Lab I", "Lab II"], teachers: ["Mr. D", "Mr. H", "Ms. B", "Mr. A", "", "Dr. F", "Ms. E"] },
        { day: "Wednesday", subjects: ["HSS", "CP", "Maths", "Physics", "Break", "Lab I", "Lab II"], teachers: ["Dr. C", "Mr. D", "Mr. A", "Ms. B", "", "Ms. E", "Dr. F"] },
        { day: "Thursday", subjects: ["Physics", "Maths", "CP", "HSS", "Break", "Lab I", "Lab II"], teachers: ["Ms. B", "Mr. A", "Mr. D", "Dr. C", "", "Dr. F", "Ms. E"] },
        { day: "Friday", subjects: ["Intro to IT", "Maths", "Physics", "CP", "Break", "Lab I", "Lab II"], teachers: ["Mr. H", "Mr. A", "Ms. B", "Mr. D", "", "Ms. E", "Dr. F"] },
      ],
      'Semester 2': [
        // Add full 5-day schedule for Semester 2
      ]
    },
    'Year 2': {
      'Semester 1': [
        // Fill as per need
      ],
      'Semester 2': [
        // Fill as per need
      ]
    },
    'Year 3': {
      'Semester 1': [],
      'Semester 2': []
    },
    'Year 4': {
      'Semester 1': [],
      'Semester 2': []
    }
  };

  let rows = '';
  let slNo = 1;

  const data = schedules[year] && schedules[year][semester];

  if (!data || data.length === 0) {
    return `<tr><td colspan="5">No schedule available yet for ${semester} of ${year}.</td></tr>`;
  }

  data.forEach((entry, rowIndex) => {
    entry.subjects.forEach((subject, colIndex) => {
      const isBreak = subject === "Break";
      const rowClass = isBreak ? 'break-row' : '';
      const teacher = isBreak ? "—" : entry.teachers[colIndex];

      rows += `
        <tr class="${rowClass}" style="animation: fadeInUp 0.6s ease-out ${colIndex * 0.1 + rowIndex * 0.2}s forwards;">
          <td>${slNo++}</td>
          <td>${entry.day}</td>
          <td>Period ${colIndex + 1}</td>
          <td>${subject}</td>
          <td>${teacher}</td>
        </tr>
      `;
    });
  });

  return rows;
}

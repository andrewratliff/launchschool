let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

let generateClassRecordSummary = students => {
  return {
    studentGrades: studentGrades(students),
    exams: examGrades(students),
  };
}

let studentGrades = students => {
  return Object.keys(students).map(student => {
    let exams = studentExams(students[student])
    let exercises = studentExercises(students[student])
    let percentGrade = calculatePercentGrade(exams, exercises);

    return formatGrade(percentGrade);
  });
};

let studentExams = student => student.scores.exams;

let studentExercises = student => student.scores.exercises;

let calculatePercentGrade = (exams, exercises) => {
  return Math.round(weightedExerciseScore(exercises) + weightedExamScore(exams));
};

let weightedExamScore = exams => (average(exams) * EXAM_WEIGHT);

let weightedExerciseScore = exercises => {
  return exercises.reduce((sum, exercise) => sum + exercise) * EXERCISE_WEIGHT;
};

let average = scores => {
  return scores.reduce((sum, score) => sum + score) / scores.length;
};

let formatGrade = percent => `${percent} (${letterGrade(percent)})`

let letterGrade = percent => {
  if (percent >= 93) {
    return 'A';
  } else if (percent >= 85) {
    return 'B';
  } else if (percent >= 77) {
    return 'C';
  } else if (percent >= 69) {
    return 'D';
  } else if (percent >= 60) {
    return 'E';
  } else {
    return 'F';
  }
};

let examGrades = students => {
  let exams = {};

  Object.keys(students).forEach(student => {
    sExams = studentExams(students[student]);

    sExams.forEach((exam, index) => {
      exams[index] = exams[index] || [];
      exams[index].push(exam);
    })
  });

  return Object.keys(exams).map(exam => examSummary(exams[exam]));
};

let examSummary = examGrades => {
  return {
    average: average(examGrades).toFixed(1),
    minimum: Math.min(...examGrades),
    maximum: Math.max(...examGrades),
  }
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

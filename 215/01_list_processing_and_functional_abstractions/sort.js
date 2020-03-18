// let compareScores = (score1, score2) => {
//   if (score1 < score2) {
//     return -1;
//   } else if (score1 > score2) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// let scores = [5, 88, 50, 9, 60, 99, 12, 23];

// scores.sort(compareScores);
// console.log(scores);

let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

let compareGrades = (student1, student2) => {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
};

console.log(studentGrades.sort(compareGrades));

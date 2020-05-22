// Buggy Code 2
// var item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     var discount = this.price * percent / 100;

//     return this.price - discount;
//   },
// };

// function objectsEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let i = 0; i < keys1.length; i += 1) {
//     if (obj1[keys1[i]] !== obj2[keys1[i]]) {
//       return false;
//     } else if (obj1[keys2[i]] !== obj2[keys2[i]]) {
//       return false;
//     }
//   };

//   return true;
// }

// function objectsEqual(a, b) {
//   if (a === b) {
//     return true;
//   }

//   return (keysMatch(a, b) && valuesMatch(a, b));
// }

// function keysMatch(obj1, obj2) {
//   let keys1 = Object.keys(obj1).sort();
//   let keys2 = Object.keys(obj2).sort();

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   return keys1.every((key, index) => key === keys2[index]);
// }

// function valuesMatch(obj1, obj2) {
//   let keys1 = Object.keys(obj1).sort();

//   return keys1.every(key => obj1[key] === obj2[key]);
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// let z = { a: 'foo' };
// let x = { a: 'foo' };

function createSchool() {
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
  const students = [];

  function createStudent(name, grade) {
    const courses = [];

    function findCourse(number) {
      return courses.filter(course => course.code === number)[0];
    }

    return {
      courses: courses,
      name: name,
      info() {
        console.log(`${name} is a ${grade} year student.`);
      },
      addCourse(course) {
        courses.push(course);
      },
      listCourses() {
        console.log(courses);
      },
      addNote(number, note) {
        const course = findCourse(number);

        if (course && course.note) {
          course.note += '; ' + note;
        } else if (course) {
          this.updateNote(number, note);
        }
      },
      updateNote(number, note) {
        const course = findCourse(number);

        if (course) {
          course.note = note;
        }
      },
      viewNotes() {
        courses.forEach(course => {
          if (course.note) {
            console.log(`${course.name}: ${course.note}`);
          }
        });
      },
      addGrade(courseNumber, grade) {
        const course = findCourse(courseNumber);

        if (course) {
          course.grade = grade;
        }
      },
      enrolledInCourse(courseName) {
        return courses.map(course => course.name).includes(courseName);
      },
      hasGradeForCourse(courseName) {
        const course = courses.find(course => course.name === courseName);

        return course.grade;
      },
    };
  }

  function getStudentsForCourse(courseName) {
    return students.filter(student => {
      return student.enrolledInCourse(courseName) && student.hasGradeForCourse(courseName);
    });
  }

  return {
    addStudent(name, year) {
      if (!VALID_YEARS.includes(year)) {
        console.log('Invalid year');
        return;
      }

      const student = createStudent(name, year);
      students.push(student);
      return student;
    },
    enrollStudent(student, course) {
      student.addCourse(course);
    },
    addGrade(student, courseNumber, grade) {
      student.addGrade(courseNumber, grade);
    },
    getReportCard(student) {
      student.courses().forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      });
    },
    courseReport(courseName) {
      const courseStudents = getStudentsForCourse(courseName);
      const grades = [];

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);
        courseStudents.forEach(student => {
          const grade = student.courses.filter(course => course.name === courseName)[0].grade;
          grades.push(grade);
          console.log(`${student.name}: ${grade}`);
        });

        const average = grades.reduce((sum, grade) => sum += grade, 0) / courseStudents.length;
        console.log(`Course Average: ${average}`);
      }
    },
  };
}

const school = createSchool();

const foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

const bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.addGrade(bar, 101, 91);

const qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

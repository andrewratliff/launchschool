// What is this
// var person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   get fullName() {
//     return this.firstName + this.lastName;
//   }
// }

// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let that = this;
//     return [1, 2, 3].map(function(number) {
//       return that.name + ' ' + number;
//     });
//   },
// };

// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }.bind(this));
//   },
// };

// Our very own bind()
// function myBind(func, context, ...args) {
//   return function(...moreArgs) {
//     return func.apply(context, args.concat(moreArgs));
//   }
// }

// function add(a, b) {
//   return a + b;
// }

// let add5 = myBind(add, null, 5);

// myFilter()
// function myFilter(array, func, thisArg) {
//   var result = [];

//   array.forEach(function(value) {
//     if (func.call(thisArg, value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// var filter = {
//   allowedValues: [5, 6, 9],
// }

// myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter); // returns [5, 6, 9]

// function newStack() {
//   const stack = [];

//   return {
//     push(item) {
//       stack.push(item);
//       return item;
//     },
//     pop() {
//       return stack.splice(0, 1)[0];
//     },
//     printStack() {
//       stack.forEach(item => {
//         console.log(item);
//       });
//     },
//   };
// }

// let stack = newStack();
// stack.push('asdf');
// stack.push('hello');

// var greeter = (function() {
//   var name = 'Naveed';
//   var greeting = 'Hello';

//   return {
//     message: greeting + ' ' + name + '!',
//     sayGreetings: function() {
//       console.log(this.message);
//     }
//   }
// })();

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

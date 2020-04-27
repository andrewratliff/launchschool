// 1 What is This
// var person = {
//   firstName: 'Rick',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName); // undefined + undefined => NaN

// 2 The Franchise
// using optional thisArg
// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// using bind
// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }.bind(this));
//   },
// };

// using local variable
// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     });
//   },
// };

// using es6 arrow function syntax
// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(number => {
//       return this.name + ' ' + number;
//     });
//   },
// };

// 3 The Franchise - Solution 2
// see above

// 4 Our very own bind()
// function myBind(func, context, ...partialArgs) {
//   return function(...remainingArgs) {
//     return func.apply(context, [...partialArgs, ...remainingArgs]);
//   };
// }

// const a = {
//   a: 1,
//   b: 2,
//   c() {
//     return this.a;
//   },
// };

// const b = {
//   a: 5,
//   b: 6,
// };

// const boundC = myBind(a.c, b);

// 5 myBind() Improved
// function addNumbers(a, b) {
//   return a + b;
// }

// var addFive = myBind(addNumbers, null, 5);

// 6 myFilter()
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

// 7 Garbage Collection
// function makeCounter() {
//   var count = 1;

//   return function() {
//     console.log(count++)
//   };
// }

// var counter = makeCounter();
// counter();
// JS will not GC the count variable's value since counter still points at the function
// returned by makeCounter which has a closure over the count variable.

// 8 Make a Stack
// function newStack() {
//   const stack = [];

//   return {
//     push(value) {
//       stack.push(value);
//     },
//     pop() {
//       return stack.pop();
//     },
//     printStack() {
//       stack.forEach(item => console.log(item));
//     },
//   };
// }

// 9 Don't Pollute My Window
// var greeter = (function() {
//   var name = 'Naveed';
//   var greeting = 'Hello';
//   var message =  greeting + ' ' + name + '!';

//   return {
//     sayGreetings: function() {
//       console.log(message);
//     }
//   };
// })();

// LS Solution:
// var greeter = {
//   message: (function() {
//     var name = 'Naveed';
//     var greeting = 'Hello';
//     return greeting + ' ' + name + '!';
//   })(),

//   sayGreetings() {
//     console.log(this.message);
//   },
// };

// 10 School Improved
var school = (function() {
  const students = [];
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
  function getCourse(student, courseName) {
    return student.listCourses().filter(function(course) {
      return course.name === courseName;
    })[0];
  }

  return {
    addStudent: function(name, year) {
      if (VALID_YEARS.indexOf(year) >= 0) {
        var student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade: function(student, courseName, grade) {
      var course = getCourse(student, courseName);

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard: function(student) {
      student.listCourses().forEach(function(course) {
        if (course.grade) {
          console.log(course.name + ': ' + String(course.grade));
        } else {
          console.log(course.name + ': In progress');
        }
      });
    },

    courseReport: function(courseName) {
      var courseStudents = students.map(function(student) {
        var course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(function(student) {
        return student.grade;
      });

      if (courseStudents.length > 0) {
        console.log('=' + courseName + ' Grades=');

        var average = courseStudents.reduce(function(total, student) {
          console.log(student.name + ': ' + String(student.grade));
          return total + student.grade;
        }, 0) / courseStudents.length;

        console.log('---');
        console.log('Course Average: ' + String(average));
      }
    },
  }
})();

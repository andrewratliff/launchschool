// 01 What is This
// Read the following code carefully. What do you think is logged on line 7. Try
// to answer the question before you run the code.

var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

// console.log(person.fullName); // NaN

// Anywhere outside a function, `this` is bound to the global object.

// 02 The Franchise
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

// 03 The Franchise - Solution 2
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

// the map function can also take a second argument, thisArg
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  }
};

// 04 Out very own bind()
function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  };
}

// 05 myBind() improved
function myBind(func, context, ...args) {
  return function(...otherArgs) {
    return func.apply(context, [...args, ...otherArgs]);
  };
}

function addNumbers(a, b) {
  return a + b;
}

let add10 = myBind(addNumbers, null, 10);

// console.log(add10(15));

// 06 myFilter()
function myFilter(array, func, thisArg) {
  var result = [];

  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]


// 07 Garbage Collection
function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

// var counter = makeCounter();
// counter();

// Will the JavaScript garbage collection mechanism GC the variable `count`
// after the function `counter` is run on line 10?
// No, since counter is still in scope and references count in its closure,
// count cannot be GC'd.

// 08 Make a Stack
function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(value => console.log(value));
    },
  };
}

// 09 Don't Pollute My Window
// var greeter = function(name, greeting) {
//   return {
//     message: greeting + ' ' + name + '!',
//     sayGreetings: function() {
//       console.log(this.message);
//     },
//   }
// };

var greeter = {
  message: (function() {
    var name = 'Naveed';
    var greeting = 'Hello';

    return greeting + ' ' + name + '!';
  })(),

  sayGreetings: function() {
    console.log(this.message);
  }
};

// greeter.sayGreetings();

// 10 School Improved
var school = (function () {
  const students = [];
  const allowedValues = ['1st', '2nd', '3rd', '4th', '5th'];
  function getCourse(student, courseName) {
    return student.listCourses().filter(function(course) {
      return course.name === courseName;
    })[0];
  }

  return {
    addStudent: function(name, year) {
      if (allowedValues.indexOf(year) >= 0) {
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
      var course = student.listCourses().filter(function(course) {
        return course.name === courseName;
      })[0];

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
  };
})();

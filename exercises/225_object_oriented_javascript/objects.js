// 01 Buggy Code 1
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      var msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + name;
          break;
        case 'afternoon':
          msg += this.afternoon + ' ' + name;
          break;
        case 'evening':
          msg += this.evening + ' ' + name;
          break;
      }

      console.log(msg);
    },
  };
}

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');

// On lines 12, 15, and 18, `name` is available because of how closures work.
// `name` is a local variable declared in the function parameters and is
// accessible in the greet function. Even after execution context of the
// function is over, the object still has a closure on `name` and it is not
// garbage collected.

// Buggy Code 2
var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    var discount = this.price * percent / 100;
    return this.price - discount;
  },
};

// In the original solution, the discount method was mutation the item object's
// price.

// console.log(item.discount(20) === 40);
// console.log(item.discount(50) === 25);
// console.log(item.discount(25) === 37.5);

// 03 Testing Object Equality
let keysMatch = (first, second) => {
  let firstKeys = Object.getOwnPropertyNames(first).sort();
  let secondKeys = Object.getOwnPropertyNames(second).sort();

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  return firstKeys.every((key, index) => key === secondKeys[index]);
};

let valuesMatch = (first, second) => {
  let firstKeys = Object.getOwnPropertyNames(first).sort();

  return firstKeys.every(key => {
    first[key] === second[key]
  });
};

let objectsEqual = (obj1, obj2) => keysMatch(obj1, obj2) && valuesMatch(obj1, obj2);

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// 04 Student
function addCourse(course) { this.courses.push(copyCourse(course)); };

function listCourses() { console.log(this.courses); };

function addNote(code, note) {
  for(let i = 0; i < this.courses.length; i += 1) {
    if(code === this.courses[i].code) {
      if (this.courses[i].note) {
        this.courses[i].note += '; ' + note;
      } else {
        this.courses[i].note = note;
      }
    }
  };
};

function viewNotes() {
  this.courses.forEach(course => {
    if (course.note) {
      console.log(`${course.name}: ${course.note}`);
    }
  });
};

function updateNote(code, note) {
  let courses = this.courses.filter(course => course.code === code);

  courses.forEach(course => course.note = note);
}

function info() { console.log(`${this.name} is a ${this.year} year student.`); };


let createStudent = (name, year) => {
  return {
    name: name,
    year: year,
    courses: [],
    addCourse: addCourse,
    listCourses: listCourses,
    addNote: addNote,
    viewNotes: viewNotes,
    updateNote: updateNote,
    info: info,
  };
};

// let foo = createStudent('Foo', '1st');

// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });

// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.addNote(102, 'Difficult subject');

// foo.updateNote(101, 'Fun course');

// 05 School

let createCourse = (name, code) => {
  return {
    name: name,
    code: code,
  };
};

let copyCourse = course => {
  return Object.keys(course).reduce((copy, key) => {
    copy[key] = course[key];
    return copy;
  }, {});
};

const YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

function addStudent(name, year) {
  if (!YEARS.includes(year)) {
    return 'Invalid Year';
  }

  let student = createStudent(name, year);
  this.students.push(student);
  return student;
};

function enrollStudent(student, course) {
  student.addCourse(course);
  this.courses.push(copyCourse(course));
};

function addGrade(student, course, grade) {
  let studentCourse = student.courses.filter(studentCourse => studentCourse.code === course.code)[0]
  let schoolCourse = this.courses.filter(studentCourse => studentCourse.code === course.code)[0]

  if (studentCourse !== [] || studentCourse !== undefined) {
    studentCourse.grade = grade;
  }

  let courseGrade = {
    student: student.name,
    grade: grade,
  };

  if (schoolCourse.grades !== undefined) {
    schoolCourse.grades.push(courseGrade);
  } else {
    schoolCourse.grades = [courseGrade];
  }
};

function getReportCard(student) {
  student.courses.forEach(course => {
    if (course.grade !== undefined) {
      console.log(`${course.name}: ${course.grade}`);
    } else {
      console.log(`${course.name}: In progress`);
    }
  });
};

function courseReport(courseName) {
  let course = this.courses.filter(course => course.name === courseName)[0];

  if (course.grades === [] || course.grades === undefined) {
    return;
  }

  console.log(`=${courseName} Grades=`);

  course.grades.forEach(grade => {
    console.log(`${grade.student}: ${grade.grade}`);
  });

  console.log('---');
  console.log(`Course Average: ${courseAvg(course)}`);
};

let courseAvg = course => {
  let grades = course.grades.map(grade => grade.grade);
  let gradeSum = grades.reduce((sum, grade) => sum += grade, 0);

  return gradeSum / grades.length;
};

let school = {
  students: [],
  courses: [],
  addStudent: addStudent,
  enrollStudent: enrollStudent,
  addGrade: addGrade,
  getReportCard: getReportCard,
  courseReport: courseReport,
};

let math = createCourse('Math', 101);
let advancedMath = createCourse('Advanced Math', 102);
let physics = createCourse('Physics', 202);

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, math);
school.enrollStudent(foo, advancedMath);
school.enrollStudent(foo, physics);
school.addGrade(foo, math, 95);
school.addGrade(foo, advancedMath, 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, math);
school.addGrade(bar, math, 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, math);
school.enrollStudent(qux, advancedMath);
school.addGrade(qux, math, 93);
school.addGrade(qux, advancedMath, 90);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

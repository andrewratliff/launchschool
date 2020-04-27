// 02 Buggy Code
var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    return this.price - (this.price * percent / 100);
  },
};

// 03
function objectsEqual(obj1, obj2) {
  if (typeof obj1 !== typeof obj2 ||
      Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  for (let i = 0; i < obj1Keys.length ; i += 1) {
    key1 = obj1Keys[i];
    key2 = obj2Keys[i];

    if (obj1[key1] !== obj2[key1] || obj1[key2] !== obj2[key2]) {
      return false
    }
  };

  return true;
}

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// 03 Student
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      console.log(this.courses)
    },
    addNote(code, note) {
      const course = this.courses.filter(course => course.code === code)[0];

      if (course) {
        if (course.hasOwnProperty('note')) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }
    },
    updateNote(code, note) {
      const course = this.courses.filter(course => course.code === code)[0];

      course.note = note;
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  }
}

// const foo = createStudent('Foo', '1st');
// foo.info();
// foo.listCourses();
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();

// 04 School
const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

const school = {
  students: [],
  addStudent(name, year) {
    if (VALID_YEARS.indexOf(year) === -1) {
      console.log('Invalid year');
      return;
    }

    const student = createStudent(name, year);
    this.students.push(student);
    return student;
  },
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },
  addGrade(student, courseCode, grade) {
    student.courses.forEach(studentCourse => {
      if (studentCourse.code === courseCode) {
        studentCourse.grade = grade;
      }
    });
  },
  getReportCard(student) {
    student.courses.forEach(course => {
      const grade = course.grade || 'In progress';
      console.log(`${course.name}: ${grade}`);
    });
  },
  courseReport(courseName) {
    let grades = [];

    if (this.noGradesAvailable(courseName)) {
      return;
    }

    console.log(`=${courseName} Grades=`);

    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.grade) {
          grades.push(course.grade);

          console.log(`${student.name}: ${course.grade}`);
        }
      })
    });

    const average = grades.reduce((sum, grade) => sum += grade, 0) / grades.length;
    console.log(`Course Average: ${Math.ceil(average)}`);
  },
  noGradesAvailable(courseName) {
    const grades = this.students.flatMap(student => {
      const course = student.courses.filter(course => course.name === courseName)[0];

      if (course) {
        return course.grade;
      }
    });

    if (grades.some(grade => grade !== undefined)) {
      return false;
    }

    return true;
  }
};

const foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101 );
school.addGrade(foo, 101, 93);
school.enrollStudent(foo, 'Advanced Math', 102);
school.addGrade(foo, 102, 90);
school.enrollStudent(foo, 'Physics', 202);

const bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101 );
school.addGrade(bar, 101, 91);

const qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101 );
school.addGrade(qux, 101, 93);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 102, 90);

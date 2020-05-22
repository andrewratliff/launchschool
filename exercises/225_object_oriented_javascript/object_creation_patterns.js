// Ancestors
// name property added to make objects easier to identify
// var foo = {name: 'foo'};
// var bar = Object.create(foo);
// bar.name = 'bar';
// var baz = Object.create(bar);
// baz.name = 'baz';
// var qux = Object.create(baz);
// qux.name = 'qux';

// Object.prototype.ancestors = function() {
//   const results = [];
//   let proto = Object.getPrototypeOf(this);

//   while (proto !== Object.prototype) {
//     results.push(proto.name);
//     proto = Object.getPrototypeOf(proto);
//   }

//   results.push('Object.prototype');

//   return results;
// };

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

// Delegate
// function delegate(obj, method, ...args) {
//   return function() {
//     return obj[method].apply(obj, args);
//   };
// }

// var foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// var baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// Classical Object Creation
// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   return this.firstName + ' ' + this.lastName;
// };

// Person.prototype.communicate = function() {
//   console.log('Communicating');
// };

// Person.prototype.eat = function() {
//   console.log('Eating');
// };

// Person.prototype.sleep = function() {
//   console.log('Sleeping');
// };

// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }

//   fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   communicate() {
//     console.log('Communicating');
//   }

//   eat() {
//     console.log('Eating');
//   }

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.constructor = Doctor;

// Doctor.prototype.diagnose = function() {
//   console.log('Diagnosing');
// };

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender)
//     this.specialization = specialization;
//   }

//   diagnose() {
//     console.log('Diagnosing');
//   }
// }

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.constructor = Professor;
// Professor.prototype.teach = function() {
//   console.log('Teaching');
// };

// class Professor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender)
//     this.subject = subject;
//   }

//   teach() {
//     console.log('Teaching');
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender)
//     this.degree = degree;
//   }

//   study() {
//     console.log('Studying');
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree)
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }

// var person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// function delegate(callingObject, methodOwner, methodName, ...args) {
//   return function() {
//     return methodOwner[methodName].apply(callingObject, args);
//   };
// }

// function extend(obj, mixin) {
//   var methods = Object.keys(mixin);

//   methods.forEach(method => {
//     obj[method] = delegate(obj, mixin, method);
//   });

//   return obj;
// }

// const professional = {
//   invoice() {
//     console.log(`${this.fullName()} is Billing customer.`);
//   },
//   payTax() {
//     console.log(`${this.fullName()} is Paying taxes.`);
//   }
// };

// var doctor = extend(new Doctor('Mr.', 'Doctor', 21, 'gender', 'Pediatrics'), professional);
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'S
// doctor.diagnose();                         // logs 'Diagnosing'

// var professor = extend(new Professor('Mr.', 'Professor', 21, 'gender', 'Systems Engineering'), professional);
// console.log(professor instanceof Person);     // logs true
// console.log(professor instanceof Professor);  // logs true
// professor.eat();                              // logs 'Eating'
// professor.communicate();                      // logs 'Communicating'
// professor.sleep();                            // logs 'Sleeping'
// console.log(professor.fullName());            // logs 'foo bar'
// professor.teach();                            // logs 'Teaching'

// doctor.invoice();                          // logs 'foo bar is Billing customer'
// doctor.payTax();                           // logs 'foo bar Paying taxes'

// professional.invoice = function() {
//   console.log(this.fullName() + ' is Asking customer to pay');
// };

// doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
// professor.invoice();                       // logs 'foo bar is Asking customer to pay'
// professor.payTax();                        // logs 'foo bar Paying taxes'

// Anonymizer
// const Account = (function() {
//   const INVALID = 'Invalid Password';

//   function validPassword(userPassword, password) {
//     return userPassword === password;
//   }

//   function getRandomLetterNumber() {
//     var randomIndex = Math.floor(Math.random() * 62);
//     return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
//   }

//   function anonymize() {
//     var result = [];

//     for (let i = 0; i < 16; i += 1) {
//       result.push(getRandomLetterNumber());
//     }

//     return result.join('');
//   }


//   return {
//     init(email, password, firstName, lastName) {
//       let userEmail = email;
//       let userPassword = password;
//       let userFirstName = firstName;
//       let userLastName = lastName;
//       this.displayName = anonymize();

//       this.reanonymize = function(password) {
//         if (validPassword(userPassword, password)) {
//           this.displayName = anonymize();
//           return true;
//         }

//         return INVALID;
//       };

//       this.resetPassword = function(password, newPassword) {
//         if (validPassword(userPassword, password)) {
//           userPassword = newPassword;
//           return true;
//         }

//         return INVALID;
//       };

//       this.firstName = function(password) {
//         if (validPassword(userPassword, password)) {
//           return userFirstName;
//         }

//         return INVALID;
//       };

//       this.lastName = function(password) {
//         if (validPassword(userPassword, password)) {
//           return userLastName;
//         }

//         return INVALID;
//       };

//       this.email = function(password) {
//         if (validPassword(userPassword, password)) {
//           return userEmail;
//         }

//         return INVALID;
//       }

//       return this;
//     },
//   }
// })();

// var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// var displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false


// var bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
// console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should 'foo@bar.com'

// Mini Inventory Management System
const ItemManager = (function() {
  const items = [];

  function generateSKU(name, category) {
    return (name.slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }

  function isValid(item) {
    return item.name.replace(/\s+/g, '').length >= 5 &&
      item.category.split(' ').length === 1 &&
      item.category.length >= 5 &&
      item.quantity !== undefined;
  }

  function findItem(skuCode) {
    return items.find(item => item.skuCode === skuCode);
  }

  return {
    items: items,
    create(name, category, quantity) {
      const item = {
        skuCode: generateSKU(name, category),
        name: name,
        category: category,
        quantity: quantity,
      };

      if (isValid(item)) {
        items.push(item);
        return item;
      }

      return false;
    },
    update(skuCode, obj) {
      const item = findItem(skuCode);
      Object.keys(obj).forEach(key => item[key] = obj[key]);
      return item;
    },
    delete(skuCode) {
      const item = findItem(skuCode);
      items.splice(items.indexOf(item), 1);
    },
    inStock() {
      return items.filter(item => item.quantity > 0);
    },
    itemsInCategory(category) {
      return items.filter(item => item.category === category);
    },
  }
})();

const ReportManager = (function () {
  return {
    init(itemManager) {
      this.items = itemManager;
    },
    createReporter(skuCode) {
      const item = this.items.items.find(item => item.skuCode === skuCode);
      return {
        itemInfo() {
          Object.getOwnPropertyNames(item).forEach(property => {
            console.log(`${property}: ${item[property]}`);
          });
        },
      };
    },
    reportInStock() {
      console.log(this.items.inStock().map(item => item.name).join(','));
    },
  };
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

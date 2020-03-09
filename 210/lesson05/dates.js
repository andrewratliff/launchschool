// 1
let today = new Date();

// 2
// console.log(`Today is day ${today.getDay()}.`);

// 3
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// console.log(`Today is day ${daysOfWeek[today.getDay()]}.`);

// 4
// console.log(`Today is day ${daysOfWeek[today.getDay()]}, the ${today.getDate()}.`);

// 5
function dateSuffix(date) {
  if (date % 10 === 1 && date % 100 !== 11) {
    return 'st';
  } else if (date % 10 === 2 && date % 100 !== 12) {
    return 'nd';
  } else if (date % 10 === 3 && date % 100 !== 13) {
    return 'rd';
  } else {
    return 'th'
  }
}

let date = today.getDate();
// console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${date + dateSuffix(date)}.`);

// 6
// console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${date + dateSuffix(date)}.`);

// 7
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${date + dateSuffix(date)}.`);

// 8
function formattedMonth(date) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  return `${day}, ${month} ${date.getDate() + dateSuffix(date.getDay())}`;
}

// console.log(formattedDate(new Date()));

// 9
// console.log(today.getFullYear());
// console.log(today.getYear());

// 10
// console.log(today.getTime());

// 11
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(formattedDate(tomorrow));

// 12
let nextWeek = new Date(today.getTime());
// console.log(nextWeek === today); // returns false since === compares objects

// 13
// console.log(nextWeek.toDateString() === today.toDateString());

// 14
function formatTime(date) {
  let hours = date.getHours() < 10 ? '0' + date.getHours() : String(date.getHours());
  let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : String(date.getMinutes());

  return hours + ':' + minutes;
}

console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));

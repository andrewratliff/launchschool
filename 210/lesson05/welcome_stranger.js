function greetings(arr, obj) {
  let name = arr.join(' ');
  let job = obj.title + ' ' + obj.occupation;

  console.log(`Hello, ${name}! Nice to have a ${job} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

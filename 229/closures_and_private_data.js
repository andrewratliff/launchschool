// 1
function makeCounterLogger(first_number) {
  return function(second_number) {
    if (second_number > first_number ) {
      for(let i = first_number; i <= second_number; i += 1) {
        console.log(i);
      }
    } else {
      for(let i = first_number; i >= second_number; i -= 1) {
        console.log(i);
      }
    }
  }
}

// 2
function makeList() {
  const items = [];

  return function(item) {
    if (item === undefined) {
      if (items.length === 0) {
        console.log('The list is empty');
        return;
      } else {
        items.forEach(item => console.log(item));
        return;
      }
    }

    let index = items.indexOf(item);

    if (index === -1) {
      items.push(item);
      console.log(`${item} added!`);
    } else {
      items.splice(index, 1);
      console.log(`${item} removed!`);
    }
  };
}

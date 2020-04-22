function makeCounter() {
  var count = 0;
  var str = 'asdf'
  return function() {
    return count += 1;
  };
}

// 1
function makeCounterLogger(start) {
  return function(stop) {
    if (start < stop) {
      for (let i = start; i <= stop; i += 1) {
        console.log(i);
      };
    } else {
      for (let i = start; i >= stop; i -= 1) {
        console.log(i);
      };
    }
  };
}

// 2
function makeList() {
  let list = [];

  return function(item) {
    if (item === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(item => console.log(item));
      }
    } else if (list.includes(item)) {
      let item_index = list.indexOf(item);
      list.splice(item_index, 1);

      console.log(`${item} removed!`);
    } else {
      list.push(item);

      console.log(`${item} added!`);
    }
  };
}

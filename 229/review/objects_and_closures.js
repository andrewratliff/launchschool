function makeList() {
  var items = [];

  return {
    add(item) {
      if (item) {
        if (!items.includes(item)) {
          items.push(item);
          console.log(item + ' added!');
        } else {
          console.log(`${item} is already on the list!`);
        }
      } else {
        console.log("That ain't an item!");
      }
    },
    remove(item) {
      if (item) {
        if (items.includes(item)) {
          items.splice(items.indexOf(item), 1);
          console.log(item + ' removed!');
        } else {
          console.log(`${item} is not on the list!`);
        }
      } else {
        console.log("That ain't an item!");
      }
    },
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },
  };
}

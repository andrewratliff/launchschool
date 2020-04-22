function makeList() {
  const items = [];

  return {
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },
    add(item) {
      if (items.includes(item)) {
        console.log(`${item} is already on the list!`);
      } else {
        items.push(item);
        console.log(`${item} added!`);
      }
    },
    remove(item) {
      if (items.includes(item)) {
        let item_index = items.indexOf(item);
        items.splice(item_index, 1);

        console.log(`${item} removed!`);
      } else {
        console.log(`${item} is not on the list!`);
      }
    },
  }
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

let totalArea = rectangles => {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);

  return areas.reduce((sum, area) => sum += area, 0);
};

let isASquare = array => array[0] === array[1];
let filterSquares = array => array.filter(element => isASquare(element));
let totalSquareArea = rectangles => totalArea(filterSquares(rectangles));

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 141

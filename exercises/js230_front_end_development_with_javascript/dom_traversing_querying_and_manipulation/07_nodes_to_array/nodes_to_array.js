// function nodesToArray() {
//   const body = document.body;

//   function walk(node, callback) {
//     const childArray = callback(node);

//     if (childArray[1].length > 0) {
//       childArray[1] = childArray[1].map(child => {
//         return walk(child, callback);
//       });
//     }

//     return childArray;
//   }

//   return walk(body, createChildArray);
// }

// function createChildArray(node) {
//   if (node.children.length > 0) {
//     const children = [...node.children];
//     return [node.tagName, children];
//   } else {
//     return [node.tagName, []];
//   }
// }

// from LS solutions:
function nodesToArray(node = document.body) {
  return [node.tagName, [...node.children].map(nodesToArray)]
}

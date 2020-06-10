function arrayToNodes(nodes, parent = document.body) {
  const element = document.createElement(nodes[0]);
  const subArray = nodes[1];

  if (subArray.length > 0) {
    subArray.forEach(elements => {
      parent.appendChild(arrayToNodes(elements, element));
    });
  }

  return element;
}

// algorithm
//
//
//// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]


var nodes1 = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

var nodes2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

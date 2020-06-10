function swap(first, second) {
  const element1 = document.getElementById(first);
  const element2 = document.getElementById(second);

  if (!element1 || !element2 || childRelationshipExists(element1, element2)) {
    return undefined;
  }

  element1.addEventListener('click', function() { alert('asdf') });

  const element1Copy = element1.cloneNode(true);
  element2.parentNode.insertBefore(element1Copy, element2);
  element1.parentNode.replaceChild(element2, element1);

  return true;
}

// using contains

function childRelationshipExists(element1, element2) {
  return element1.contains(element2) || element2.contains(element1);
}

// function childRelationshipExists(element1, element2) {
//   return isChild(element1, element2) || isChild(element2, element1);
// }

// function isChild(element1, element2) {
//   let result;

//   function checkChildren(node, callback) {
//     const children = node.children;

//     if (callback(children, element2)) {
//       result = true;
//     }

//     if (!result) {
//       [...children].forEach(child => {
//         checkChildren(child, callback);
//       });
//     }
//   };

//   checkChildren(element1, function(children, element) {
//     return [...children].some(child => child === element);
//   });

//   return result;
// }

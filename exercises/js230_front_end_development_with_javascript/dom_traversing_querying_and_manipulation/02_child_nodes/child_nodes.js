const elementIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);

function countChildren(node) {
  const directChildren = node.childNodes
  let indirectChildren = 0;

  function incrementIndirectChildren(node) {
    indirectChildren += node.childNodes.length;
  }

  function walk(node, callback) {
    callback(node);
    node.childNodes.forEach(child => walk(child, callback));
  }

  Array.prototype.slice.call(directChildren).forEach(child => {
    walk(child, incrementIndirectChildren);
  });

  return [directChildren.length, indirectChildren];
}

window.onload = elementIds.forEach(id => {
  const element = document.getElementById(id);
  console.log(`id${id}: ${countChildren(element)}`);
});

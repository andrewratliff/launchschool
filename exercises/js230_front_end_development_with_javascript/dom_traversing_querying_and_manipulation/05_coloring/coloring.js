function color(generation) {
  const generationIds = [];

  function walk(node, currentGeneration) {
    if (currentGeneration === generation) {
      generationIds.push(node.id);
    } else if (node.children.length > 0) {
      [...node.children].forEach(child => walk(child, currentGeneration + 1));
    }
  }

  [...document.body.children].forEach(child => walk(child, 1));

  generationIds.forEach(id => {
    const element = document.getElementById(id);
    element.classList.add('generation-color');
  });
}

function sliceTree(startId, endId) {
  const startElement = document.getElementById(startId);
  const innermostChild = document.getElementById(endId);

  if (!startElement|| !innermostChild) {
    return undefined;
  }

  const tagNames = [];
  let directPathExists = true;
  let currentElement = innermostChild;

  while (currentElement !== startElement.parentElement) {
    if (currentElement.tagName === 'BODY') {
      directPathExists = false;
      break;
    }

    tagNames.unshift(currentElement.tagName);
    currentElement = currentElement.parentElement;
  }

  if (directPathExists) {
    return tagNames;
  } else {
    return undefined;
  }
}

function domTreeTracer(id) {
  let element = document.getElementById(id);
  const result = [];
  let parent;

  while (parent !== document.body || parent.nodeName === 'SCRIPT') {
    parent = element.parentElement;
    result.push([...parent.children].map(child => child.nodeName));
    element = element.parentElement;
  }

  return result;
}

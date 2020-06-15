document.addEventListener('DOMContentLoaded', () => {
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  const callback = function(event) {
    alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
  };

  // console.log(delegateEvent(element1, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
  console.log(delegateEvent(element3, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'aside p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));

  var newP = document.createElement('P');
  var newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);
});

function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {
    return !parentElement.addEventListener(eventType, event => {
      const innerElements = [...parentElement.querySelectorAll(selector)];

      if(innerElements.includes(event.target)) {
        callback(event);
      }
    });
  }
}

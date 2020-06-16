const options = {
  'animal-classifications': {
    'Classifications': [],
    'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    'Mammal': ['Bear', 'Whale'],
    'Bird': ['Ostrich'],
  },
  'animals': {
    'Animals': [],
    'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Turtle': ['Vertebrate', 'Cold-blooded'],
    'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Salmon': ['Vertebrate', 'Cold-blooded'],
    'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
  },
};

document.addEventListener('input', event => {
  const dropdownId = event.target.id;
  const choice = event.target.value;
  const newOptions = options[dropdownId][choice];
  let otherDropdown;


  if (dropdownId === 'animal-classifications') {
    otherDropdown = document.getElementById('animals');
  } else if (dropdownId === 'animals') {
    otherDropdown = document.getElementById('animal-classifications');
  }

  setOptions(otherDropdown, newOptions);
});

document.addEventListener('click', event => {
  if (event.target.id === 'clear') {
    event.preventDefault();
    const classifications = document.getElementById('animal-classifications');
    const animals = document.getElementById('animals');

    setOptions(classifications, Object.keys(options[classifications.id]));
    setOptions(animals, Object.keys(options[animals.id]));
  }
})

function setOptions(element, options) {
  element.options.length = 0;

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.text = option;
    element.add(optionElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const classifications = document.querySelector('#animal-classifications');
  const animals = document.querySelector('#animals');
  const clearButton = document.querySelector('#clear');

  classifications.addEventListener('change', function(event) {
    const options = {
      'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
      'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
      'Cold-blooded': ['Salmon', 'Turtle'],
      'Mammal': ['Bear', 'Whale'],
      'Bird': ['Ostrich'],
    }

    const selection = event.target.value;
    updateOptions(animals, options[selection]);
  });

  animals.addEventListener('change', function(event) {
    const options = {
      'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
      'Turtle': ['Vertebrate', 'Cold-blooded'],
      'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
      'Salmon': ['Vertebrate', 'Cold-blooded'],
      'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
    }

    const selection = event.target.value;
    updateOptions(classifications, options[selection]);
  });

  clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    const classificationDefaults = ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'];
    const animalDefaults = ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];

    updateOptions(classifications, classificationDefaults);
    updateOptions(animals, animalDefaults);
  })

  function updateOptions(element, options) {
    element.options.length = 0;

    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;

      element.add(optionElement);
      return optionElement;
    });
  }
})

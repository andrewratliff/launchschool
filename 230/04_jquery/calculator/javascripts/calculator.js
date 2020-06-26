$(() => {
  const header = $('h1');
  const numerator = $('#numerator');
  const denominator = $('#denominator');
  const operator = $('#operator');
  const form = $('form');


  form.submit((event) => {
    event.preventDefault();

    switch(operator.val()) {
      case '+':
        header.text(parseInt(numerator.val(), 10) + parseInt(denominator.val(), 10));
        break;

      case '-':
        header.text(parseInt(numerator.val(), 10) - parseInt(denominator.val(), 10));
        break;

      case '/':
        header.text(parseInt(numerator.val(), 10) / parseInt(denominator.val(), 10));
        break;

      case '*':
        header.text(parseInt(numerator.val(), 10) * parseInt(denominator.val(), 10));
        break;
    }
  })
})

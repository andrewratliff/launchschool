$(() => {
  const ul = $('ul');

  $('form').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const quantity = parseInt($('#quantity').val(), 10) || 1;

    if (name.length > 0) {
      const li = document.createElement('li');
      li.textContent = `${quantity} ${name}`;

      ul.append(li);

      this.reset();
    }
  });
});

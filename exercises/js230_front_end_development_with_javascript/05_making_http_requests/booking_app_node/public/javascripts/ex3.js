document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('staff');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const request = new XMLHttpRequest();

    request.open('POST', form.action);
    request.send(formData);

    request.addEventListener('load', () => {
      if (request.status === 201) {
        let json = JSON.parse(request.response);
        alert(`Staff member created with id: ${json.id}`);
      } else {
        alert(request.responseText);
      }
    });
  });
});

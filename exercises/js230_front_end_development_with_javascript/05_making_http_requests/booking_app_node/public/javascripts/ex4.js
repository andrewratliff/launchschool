document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://localhost:3000/api';
  const addButton = document.getElementById('add');
  const form = document.getElementById('schedule');

  addButton.addEventListener('click', event => {
    event.preventDefault();
    const firstSchedule = form.firstElementChild;
    const newSchedule = firstSchedule.cloneNode(true);
    form.insertBefore(newSchedule, form.lastElementChild);
  })

  const request = new XMLHttpRequest();
  request.open('GET', url + '/staff_members');
  request.responseType = 'json';

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const nameDropdown = document.getElementById('name');

      request.response.forEach(staffMember => {
        const id = staffMember.id;
        const name = staffMember.name;

        const option = document.createElement('option');
        option.textContent = name;
        option.value = id;

        nameDropdown.appendChild(option);
      });
    } else {
      alert('Something went wrong');
    }
  });

  request.send();

  form.addEventListener('submit', event => {
    event.preventDefault();

    const schedules = {
      schedules: [],
    }

    const formData = new FormData(form);

    for (let p of formData) {
      console.log(p);
    }
    // formData.entries().forEach(entry => console.log(entry));
  });

});

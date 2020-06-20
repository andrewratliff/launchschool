document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://localhost:3000/api';

  function getSchedules() {
    let request = new XMLHttpRequest();

    request.open('GET', url + '/schedules');
    request.responseType = 'json';
    request.timeout = 5000;

    request.addEventListener('load', () => {
      const schedules = request.response;

      if (schedules.length > 0) {
        const tally = schedules.reduce((tally, schedule) => {
          const id = schedule.staff_id;
          tally[id] = tally[id] + 1 || 1;
          return tally;
        }, {});

        Object.keys(tally).forEach(id => {
          console.log(`staff ${id}: ${tally[id]}`);
        });
      } else {
        console.log('There are no schedules available for booking.');
      }
    });

    request.addEventListener('timeout', () => {
      console.log('It took too long. Try again later');
    })

    request.addEventListener('loadend', () => {
      console.log('Request complete');
    })

    request.send();
  }

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

document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://localhost:3000/api';

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
});

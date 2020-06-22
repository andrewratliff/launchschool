document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add');
  const form = document.getElementById('schedule');
  let currentId = 0;
  let staff = [];

  (() => {
    const request = new XMLHttpRequest();
    request.open('GET', '/api/staff_members');
    request.responseType = 'json';
    request.send();
    request.addEventListener('load', () => {
      staff = request.response;
    });
  })();

  addButton.addEventListener('click', event => {
    event.preventDefault();
    currentId += 1;
    const newSchedule = newScheduleTemplate(currentId, staff);
    form.insertBefore(newSchedule, form.lastElementChild);
  })

  form.addEventListener('submit', event => {
    event.preventDefault();

    const data = {
      "schedules": [],
    }

    for (let i = 1; i <= currentId; i += 1) {
      const staff_id = form[`name-${i}`].value;
      const date = form[`date-${i}`].value;
      const time = form[`time-${i}`].value;

      data.schedules.push({
        staff_id: staff_id,
        date: date,
        time: time,
      });
    }

    const request = new XMLHttpRequest();
    request.open('POST', form.action);
    request.setRequestHeader('Content-Type', 'application/json');

    request.addEventListener('load', () => {
      if (request.status === 201) {
        alert('Schedules added');
      } else {
        alert('Check your inputs');
      }
    })

    request.send(JSON.stringify(data));
  });
});

function newScheduleTemplate(id, staff) {
  const fieldSet = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = `Schedule ${id}`;
  fieldSet.appendChild(legend);
  const dl = document.createElement('dl');
  dl.appendChild(fieldSet);

  const staffDt = document.createElement('dt');
  const staffLabel = document.createElement('label');
  staffLabel.setAttribute('for', 'name');
  staffLabel.textContent = 'Staff Name';
  const staffDd = document.createElement('dd');
  const staffSelect = document.createElement('select');
  staffSelect.setAttribute('name', 'staff_id');
  staffSelect.setAttribute('id', `name-${id}`);

  staff.forEach(staffMember => {
    const staffId = staffMember.id;
    const name = staffMember.name;

    const option = document.createElement('option');
    option.textContent = name;
    option.value = staffId;

    staffSelect.appendChild(option);
  });

  fieldSet.appendChild(staffDt);
  staffDt.appendChild(staffLabel);
  fieldSet.appendChild(staffDd);
  staffDd.appendChild(staffSelect);

  const dateDt = document.createElement('dt');
  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', `date-${id}`);
  dateLabel.textContent = 'Date';
  const dateDd = document.createElement('dd');
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', `date-${id}`);
  dateInput.setAttribute('name', 'date');

  fieldSet.appendChild(dateDt);
  dateDt.appendChild(dateLabel);
  fieldSet.appendChild(dateDd);
  dateDd.appendChild(dateInput);

  const timeDt = document.createElement('dt');
  const timeLabel = document.createElement('label');
  timeLabel.setAttribute('name', 'time');
  timeLabel.textContent = 'Time';
  const timeDd = document.createElement('dd');
  const timeInput = document.createElement('input');
  timeInput.setAttribute('type', 'time');
  timeInput.setAttribute('id', `time-${id}`);
  timeInput.setAttribute('name', 'time');

  fieldSet.appendChild(timeDt);
  timeDt.appendChild(timeLabel);
  fieldSet.appendChild(timeDd);
  timeDd.appendChild(timeInput);

  return dl;
}

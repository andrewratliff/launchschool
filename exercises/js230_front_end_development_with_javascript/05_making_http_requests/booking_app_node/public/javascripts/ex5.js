document.addEventListener('DOMContentLoaded', () => {
  fetchSchedules();

  const form = document.getElementById('schedules');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const json = formDataToJson(formData);
    let status;

    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })
      .then(response => {
        status = response.status;
        return response.text();
      })
      .then(responseText => {
        if (status === 204) {
          alert('Booked!');
          window.location.href = '/ex5.html';
        } else {
          alert(responseText);
          const bookingSequence = responseText.split(':')[1].trim();

          if (bookingSequence) {
            const newStudentDiv = document.getElementById('new_student');
            newStudentDiv.style.backgroundColor = 'lightgray';
            newStudentDiv.innerHTML = '';
            newStudentDiv.appendChild(newStudentTemplate(json["student_email"], bookingSequence));
          }
        }
      });
  });
});

async function fetchSchedules() {
  const staff = await fetchStaff();
  const select = document.getElementById('staff');

  fetch('/api/schedules', {headers:{ 'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then(schedules => {
      const openSchedules = schedules.filter(schedule => schedule.student_email === null);

      openSchedules.forEach(schedule => {
        const scheduleId = schedule.id;
        const name = staff.find(member => member.id === schedule.staff_id).name
        const date = schedule.date;
        const time = schedule.time;
        const option = document.createElement('option');

        option.setAttribute('value', scheduleId);
        option.textContent = `${name} | ${date} | ${time}`;

        select.appendChild(option);
      });
    })
};

async function fetchStaff() {
  return fetch('/api/staff_members', {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json())
}

function newStudentTemplate(email, bookingSequence) {
  const title = document.createElement('h1');
  title.textContent = 'Please provide new student details';

  const form = document.createElement('form');
  form.setAttribute('action', '/api/students');
  form.setAttribute('method', 'post');
  form.setAttribute('id', 'student_form');

  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'new_student_email');
  emailLabel.textContent = 'Email: ';

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'new_student_email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('value', email);

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'new_student_name');
  nameLabel.textContent = 'Name: ';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'new_student_name');
  nameInput.setAttribute('name', 'name')

  const bookingSequenceLabel = document.createElement('label');
  bookingSequenceLabel.setAttribute('for', 'booking_sequence');
  bookingSequenceLabel.textContent = 'Booking sequence: ';

  const bookingSequenceInput = document.createElement('input');
  bookingSequenceInput.setAttribute('id', 'booking_sequence');
  bookingSequenceInput.setAttribute('name', 'booking_sequence');
  bookingSequenceInput.setAttribute('value', bookingSequence);

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit');

  form.appendChild(title);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(bookingSequenceLabel);
  form.appendChild(bookingSequenceInput);
  form.appendChild(submitButton);

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const json = formDataToJson(formData);
    let status;

    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })
      .then(response => {
        status = response.status;
        return response.text()
      })
      .then(responseText => {
        alert(responseText);
        if (status === 201) {
          form.reset();
          const scheduleForm = document.getElementById('schedules');
          const submit = new Event('submit', { cancelable: true })
          scheduleForm.dispatchEvent(submit);
        }
      })
  });

  return form;
}

function formDataToJson(formData) {
  const json  = {};
  for (const pair of formData.entries()) {
    json[pair[0]] = pair[1];
  };

  return json;
}

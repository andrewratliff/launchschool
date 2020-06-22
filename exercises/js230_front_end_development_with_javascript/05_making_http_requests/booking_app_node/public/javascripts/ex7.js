function cancelSchedule(scheduleId) {
  let status;

  fetch(`/api/schedules/${scheduleId}`, {
    method: 'DELETE',
  })
    .then(response => {
      status = response.status;
      return response.text();
    })
    .then(responseText => {
      if (status === 204) {
        console.log('Schedule deleted!');
      } else {
        console.log(responseText);
      }
    })
}

function cancelBooking(bookingId) {
  let status;

  fetch(`/api/bookings/${bookingId}`, {
    method: 'PUT',
  })
    .then(response => {
      status = response.status;
      return response.text();
    })
    .then(responseText => {
      if (status === 204) {
        console.log('Booking canceled!');
      } else {
        console.log(responseText);
      }
    })
}

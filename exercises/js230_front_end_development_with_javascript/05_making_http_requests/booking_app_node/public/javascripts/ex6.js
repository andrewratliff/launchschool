document.addEventListener('DOMContentLoaded', () => {
  const ul = document.getElementById('bookings');

  fetch('/api/bookings')
    .then(response => response.json())
    .then(dates=> {
      dates.forEach((date, index) => {
        const li = document.createElement('li');
        li.setAttribute('id', `date-${index}`);
        li.textContent = date;

        li.addEventListener('click', () => {
          while (li.firstElementChild) {
            li.removeChild(li.lastElementChild);
          }

          fetchBookings(date, li);
        })

        ul.appendChild(li);
      })
    })
})

async function fetchBookings(date, li) {
  const bookings = await fetch(`/api/bookings/${date}`)
    .then(response => response.json());
  const ul = document.createElement('ul');

  bookings.forEach(booking => {
    const bookingItem = document.createElement('li');
    bookingItem.textContent = `${booking[0]} | ${booking[1]} | ${booking[2]}`;
    ul.appendChild(bookingItem);
  });

  li.appendChild(ul);
};

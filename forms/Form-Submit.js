const name = document.getElementById('name-field');
const email = document.getElementById('email-field');
const subject = document.getElementById('subject-field');
const message = document.getElementById('message-field');
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  }

  fetch('http://localhost:5000/api/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),  // Convert the data to JSON format
  })
    .then((response) => response.json())
    .then((data) => {
      alert('Form data was successfully sent to User');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send form data to User. Please try again later.');
    });
});

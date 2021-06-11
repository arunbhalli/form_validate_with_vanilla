const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (username.value == '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
});

document.body.style.backgroundColor = '#a3a3a324';


const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', subHan);
const profile = {};

function subHan(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  event.currentTarget.reset();
}
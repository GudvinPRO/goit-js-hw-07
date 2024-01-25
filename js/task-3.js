document.querySelector('body').style.backgroundColor = '#a3a3a324';

const inputNameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    nameOut.textContent = currentTarget.value.trim();
  } else {
    nameOut.textContent = 'Anonymous';
  }
};

inputNameIn.addEventListener('input', getInputValue);
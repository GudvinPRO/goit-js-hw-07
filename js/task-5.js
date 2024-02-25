

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const textColor = document.querySelector('.color');
const changeColorIn = document.querySelector('.change-color');
const bodyStyle = document.body;


const changeColor = () => {
  textColor.textContent = getRandomHexColor();
  bodyStyle.style.backgroundColor = textColor.textContent;
};

changeColorIn.addEventListener('click', changeColor);

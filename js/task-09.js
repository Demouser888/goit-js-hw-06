function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeBtn = document.querySelector ('.change-color');
const nameColor = document.querySelector ('.color');
const body = document.querySelector('body');

changeBtn.addEventListener ('click', event =>{
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  nameColor.textContent = color;
})

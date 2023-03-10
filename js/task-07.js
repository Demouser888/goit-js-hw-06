const sizeTextInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

sizeTextInput.addEventListener('input', event => {
    spanText.style.fontSize = `${event.target.value}px`;
  });
  
  
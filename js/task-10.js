function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes =  document.querySelector ('#boxes');

numberInput.addEventListener('input', event=>{
  let amount = event.currentTarget.value;
})


function createBoxes(amount){
  const boxesToAdd = [];
	for (let i = 0; i < amount; i+= 1) {
		const box = document.createElement('div');
		box.style.height = '${(30 + 10 * i)} px';
		box.style.width = '${(30 + 10 * i)} px';
		box.style.background = getRandomHexColor();
		boxesToAdd.push(div);
	}
	return boxesToAdd;
  console.log (boxesToAdd);
}

createBtn.addEventListener('click', createBoxes => {
	boxes.append(...boxesToAdd);
});


destroyBtn.addEventListener('click', createBoxes => {
	boxes.remove();
});




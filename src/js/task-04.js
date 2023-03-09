let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')

buttonDecrement.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

buttonIncrement.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})
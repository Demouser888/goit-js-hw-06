const validationInput = document.querySelector('#validation-input')

validationInput.addEventListener('blur', event => {
    
	if (event.target.value.length == validationInput.getAttribute('data-length')) {
		validationInput.classList.add('valid')
		
	} else {
		validationInput.classList.add('invalid')
	}
}) 
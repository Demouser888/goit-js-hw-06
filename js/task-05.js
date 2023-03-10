const nameInput = document.querySelector ('#name-input');
const nameLabel = document.querySelector ("#name-output");

nameInput.addEventListener("input", (event) => {
    nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ''){
        nameLabel.textContent = 'Anonymous'
    }
  });


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient =>{
  const itemIngridiens = document.createElement('li');
  itemIngridiens.textContent = ingredient;
  itemIngridiens.classList.add('item');
  return itemIngridiens;
});

listIngredients.append(...elements);
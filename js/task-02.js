const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = [];

for(let i=0; i < ingredients.length;i++){
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredients[i];
  items.push(itemEl);
};

const listEl = document.querySelector('ul');
listEl.append(...items);




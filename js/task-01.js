const numberOfCategories = document.querySelectorAll('h2').length;
console.log("Number of categories: ",  numberOfCategories);
console.log('');
const categoryAnimals = document.querySelectorAll('h2')[0].textContent;
const animalsElements = document.querySelectorAll('.item')[0].querySelectorAll('.item li').length;
console.log("Category: ",  categoryAnimals); // Category: Animals
console.log("Elements: ",  animalsElements);  // Elements: 4

const categoryProducts = document.querySelectorAll('h2')[1].textContent;
const productsElements = document.querySelectorAll('.item')[1].querySelectorAll('.item li').length;
console.log("Category: ",  categoryProducts); // Category: Products
console.log("Elements: ",  productsElements);  // Elements: 3

const categoryTechnologies = document.querySelectorAll('h2')[2].textContent;
const technologiesElements = document.querySelectorAll('.item')[2].querySelectorAll('.item li').length;
console.log("Category: ",  categoryTechnologies); // Category: Technologies
console.log("Elements: ",  technologiesElements);  // Elements: 5

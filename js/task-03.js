const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// #1

const listEl = document.querySelector('ul');

for(let i=0; i < images.length;i++){
  listEl.insertAdjacentHTML('beforeend', `<li class="gallery-item"><img class="gallery-image" src="${images[i].url}" alt="${images[i].alt}"></li>`);
};


// #2
// const items = [];
// const listEl = document.querySelector('ul');

// for(let i=0; i < images.length;i++){
  // const itemEl = document.createElement('li');
  // itemEl.classList.add('gallery-item');
  // const itemImageEl = document.createElement('img');
  // itemImageEl.classList.add('gallery-image');
  // itemImageEl.src = images[i].url;
  // itemImageEl.alt = images[i].alt;
  // itemEl.append(itemImageEl);

  // items.push(itemEl);
// };

// listEl.append(...items);




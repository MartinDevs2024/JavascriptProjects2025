const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];

//   const categories = ['all', ... new Set(menu.map((item) => item
//   .category))];

//   console.log(categories);
// map - get all instances
// new set - narrow down
// ['all', ...] - turn it back to array

const categories = ['all', ... new Set(menu.map((item) => item.category))];

const result = document.querySelector('.result');
result.innerHTML = categories.map((category) => {
    return `<button class="buttonClick">${category}</button>`;
}).join('');

const clickButton = function() {
    document.querySelector('.buttonClick').addEventListener('click', function() {
        console.log('You click it');
    })
}

clickButton();
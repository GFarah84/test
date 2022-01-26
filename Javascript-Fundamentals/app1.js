const menu = [
    {'name':'pancake',
     'category':'Breakfast'
    },
    {
     'name':'Burger',
     'category': 'Lunch'
    },
    {
     'name': 'Steak',
     'category': 'Dinner'
    },
    {
     'name': 'Bacon',
     'category': 'Breakfast'
    },
    {
     'name': 'Eggs',
     'category': 'Breakfast'
    },
    {
     'name': 'Pasta',
     'category': 'dinner'
    }
];

const categories = ['All', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector('#result');
result.innerHTML = categories.map((category) => {
    return `<button> ${category} </button>`
}).join('   ');
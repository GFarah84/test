//const fetch = require("node-fetch")
import fetch from "node-fetch";

 const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99, 
        amount: 1,
    },
    {
        title: 'Google Pixel',
        price: 499.99, 
        amount: 2,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99, 
        amount: 4,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99, 
        amount: 3,
    },
];
let {totalItems, totalCart} = cart.reduce((total,cartItem) => {
    const {amount, price} = cartItem
    total.totalItems += amount;
    total.totalCart += amount * price;

    return total;
}, {totalItems: 0,
    totalCart: 0}); 
totalCart = parseFloat(totalCart.toFixed(2));
console.log(totalItems, totalCart);

const URL = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () => {
    const response = await fetch(URL);
    const data = await response.json(); 
    console.log(data);
};

fetchRepos();

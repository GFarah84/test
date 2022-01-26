const person = {
    'name':'John',
};
person.age = 34;

console.log(person);

const items = {'featured-items':['item1', 'item2'],};

console.log(items["featured-items"]);
console.log(person.name);


let appstate = 'Loading..';

const app = {[appstate]:true};
console.log(app);
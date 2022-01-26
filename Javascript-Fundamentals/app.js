const persons = [
{
    'Name': 'George',
    'Age': 37,
    'Position': 'Developer'
},
{
    'Name': 'bibo',
    'Age': 27,
    'Position': 'Accountat'    
},
{
    'Name': 'John',
    'Age': 34,
    'Position': 'Eng.'
},
{
    'Name': 'Test',
    'Age': 35,
    'Position': 'Intern.'

}
];
const getAges = (person) => person.Age * 2;

const ages = persons.map(getAges);

console.log(ages);
console.log(persons);

const newpeople = persons.map((item) => {
    return {
        firstname: item.Name.toUpperCase(),
        oldAge: item.Age + 20,
    };
});

console.log(newpeople);

const names = persons.map((person) => `<h2> ${person.Name} </h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
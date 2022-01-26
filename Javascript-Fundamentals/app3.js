const persons = [{'name': 'John', 'age': 20, 'position':'developer'},
                 {'name': 'Peter', 'age': 25, 'position':'designer'},
                 {'name': 'suzy', 'age': 30, 'position':'Boss'},
                 {'name': 'Anna', 'age': 35, 'position':'intern'},
                ];

const youngpepole = persons.filter((person) => {
    return person.age < 30;
});              

console.log(youngpepole);

const developers = persons.filter((person) => person.position === 'developer');

console.log(developers);
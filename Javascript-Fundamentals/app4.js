const persons = [
                 {'name': 'John', 'age': 20, 'position':'developer', 'salary':100},
                 {'name': 'Peter', 'age': 25, 'position':'designer', 'salary':300},
                 {'name': 'suzy', 'age': 30, 'position':'Boss', 'salary':400},
                 {'name': 'Anna', 'age': 35, 'position':'intern', 'salary':10},
                ];

const dailytotal = persons.reduce((total,item) =>{
    console.log(total);
    console.log(item);
    return total += item.salary;
},0);

console.log(dailytotal);
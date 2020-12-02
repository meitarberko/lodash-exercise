import { Person } from './person.js';
let persons = [new Person('shaked', 1, 1.70), new Person('Anna', 2, 1.65), new Person(), new Person('john', 4, 0.8), new Person('shir', 5, 1.6),
    new Person('safari', 6, 1.8), new Person('orin', 7, 2.1), new Person('hod', 8, 1.6),
    new Person('avi', 9, 1.4), new Person('phillip', 10, 1.7)];
//1
function onlyNames(persons) {
    return persons.map(function (person) { return person.name; });
}
//2
function everyoneIs5(persons) {
    return persons.map(function (person) { return person.age = 5; });
}
function everyoneIs52(persons) {
    let newArray = persons.forEach(function (person) { person.age = 5; });
    return newArray;
}
//3
function onlyAdults(persons) {
    return persons.filter(function (person) { return person.age === 5; });
}
//4
function onlyAges(persons) {
    return persons.map(function (person) { return person.age; });
}
function onlyAges2(persons) {
    getnames(persons);
}
let getnames = function (persons: Person[]) {
    return persons.reduce(function (onlyAge, person, index) : number[] {
        onlyAge[index] = { number: person.age };
        return onlyAge;
    }, []);
};

//5
function sortPersonsByAge(persons) {
    return persons.sort(comparePersonsAge);
}
function comparePersonsAge(person1, person2) {
    if (person1.age > person2.age) {
        return 1;
    }
    else if (person2.age > person1.age) {
        return -1;
    }
    else {
        return 0;
    }
}
//6
function the10YOperson(persons) {
    return persons.find(function (person) { return person.age === 10; });
}
//7
function isThereJohn(persons) {
    return persons.some(function (person) { return person.name === 'john'; });
}
function isThereJohn2(persons) {
    return persons.find(function (person) { return person.name === 'john'; }) ? true : false;
}
function isThereMeitar(persons) {
    return persons.some(function (person) { return person.name === 'meitar'; }).forEach(function (person) { return person.name === 'meitar'; });
} 
 
console.log(onlyAges2(persons));

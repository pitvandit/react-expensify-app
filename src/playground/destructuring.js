//
//OBJECT destructuring
//

const person = {
    name: 'Pit',
    age: 34,
    location: {
        city: 'Poznań',
        temp: 15
    }
};

// const name = person.name;
// const age = person.age;
// name = 'Anonim' -> default
const {name: firstName = 'Anonim', age} = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`Its ${temperature} in ${city}`);
}


const book = {
    title: 'Pan Tadeusz',
    author: 'Adam Mickiewicz',
    publisher: {
        //name: 'Penguin'
    }
}

const { name: publisherName = 'self-Published' } = book.publisher;

console.log(publisherName);


console.log('/////////////////////////////////////////');

//
// ARRAY destructuring
//

const address = [
    'Pszenna 13',
    'Poznań',
    'Wlkp',
    '61-663'
];

const [, , state = 'New York', ,other = 'other'] = address;

console.log(`You are in ${state} ${other}`);

/////////////////////

const item = [
    'Coffe (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];

const [coffe, ,price] = item;

console.log(`A medium ${coffe} costs ${price}`);
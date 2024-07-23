// Activity 1
let name = 'DaKnight';
let age = 24;
console.log(`Hello, ${name} of age ${age}!`);

console.log(`Hi, ${name}.
Nice to meet you!`);

// Activity 2
const num = [1, 2, 3, 4];
[first, second] = num;
console.log(first,' ',second);

const book = {
    title: 'Mine Challenge',
    author: 'Me',
    year: 2024
}
const { title, author} = book;
console.log(title," ",author); 

// Activity 3
const arr2 = [21, ...num, 20];
console.log(arr2);

function sum(...args){
    let total = 0;
    for(const num of args){
        total += num;
    }
    return total;
}
console.log(sum(21,213,123,12));

// Activity 4
function mul(a, b=1){
    return a*b;
}
console.log(mul(5,2));
console.log(mul(5));

// Activity 5

let key1 = 'Hello';
let key2 = 201;
let func = function(){
    console.log('Hey!');
}

let newObj = { key1, key2, func};
console.log(newObj);

let computedVariable1 = 'Heoy';
let computedVariable2 = 25;

const newObj2 = {
    [computedVariable1]: ', nice to meet ya!.',
    [computedVariable2]: ', is your age!'
}
console.log(newObj2);
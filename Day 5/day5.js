// Activity 1
function evenOdd(num){
    console.log(((num % 2) === 0) ? `${num} is even number.` : `${num} is odd number.` );
}
evenOdd(5);

function calcSquare(num){
    return (num*num);
}
console.log(calcSquare(5));


// Activity 2
const maximumNum = function(a, b){
    if(a>b) {
        console.log(`${a} is maxmium.`);
        return;
    }
    console.log(`${b} is maxmium.`);   
}
maximumNum(10, 20);

const concatenator = function (str1, str2){
    return (str1 + str2);
}
console.log(concatenator('hi', ', Power'));


// Activity 3
const calcSum = (a, b)=>{
    return (a + b);
}
console.log(calcSum(10, 100));

const checkComma = (str) => {
    for(let char of str){
        if(char === ',') return true;
    }
    return false;
}
console.log(checkComma('Hi, greed!'));


// Activity 4
const calcProduct= (num1, num2 = 22) => {
    return (num1*num2);
}
console.log(calcProduct(5));

const greetMessage = function (name, age = 20){
    return (`Hi, ${name}. You are ${age} years old. Nice to meet you!`);
}
console.log(greetMessage("DaKnight"));

// Activity 5
function greet(num){
    console.log('Hi, developers! ' + num);
}

function looper(func, num){
    if(num === 0) return;
    func(num);
    looper(func, num-1);
}
looper(greet, 5);

function incrementBy1(value){
    return value+1;
}

function incrementBy5(value){
    return value+5;
}

function secondLooper(func1, func2, value){
    console.log(func2(func1(value)));
}
secondLooper(incrementBy1, incrementBy5, 8);

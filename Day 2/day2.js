// Activity 1
let a = 10, b = 5;
function add(a, b){
    console.log(a+b);
}
function substract(a, b){
    console.log(a-b);
}
function mutiply(a, b){
    console.log(a*b);
}
function divide(a, b){
    console.log(a/b);
}
function remainder(a, b){
    console.log(a%b);
}

add(a,b);
substract(a,b);
mutiply(a,b);
divide(a,b);
remainder(a,b);

// Activity 2
console.log(a+=2);
console.log(a-=4);


// Activity 3
console.log(a>10);
console.log(a<11);
console.log(a>=10);
console.log(a<=11);
console.log(a=='8');
console.log(a==='8');


// Activity 4
if(a<11 && a===8) console.log('Comparision successfull in both cases.');
if(a>11 || a=='8') console.log('Comparision successfull in one case.');
if(!(a==='8')) console.log('Comparision successfull in not case.');


// Activity 5
console.log( (a>=8)? 'ternary true.': 'ternary false.');
console.log( (b>=8)? 'ternary true.': 'ternary false.');
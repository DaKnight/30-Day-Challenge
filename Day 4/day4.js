// Activity 1
function print10num(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

function tableOf5(){
    for(let i = 1; i <= 10; i++){
        console.log(`5 x ${i} = ${5*i}.`);
    }
}

print10num();
tableOf5();

// Activity 2
function sumFirst10Num(){
    let i = 1, sum = 0;
    while(i <= 10){
        sum += i;
        i++;
    }
    console.log(sum);
}
sumFirst10Num();

function print10To1(){
    let i = 10;
    while(i >= 1){
        console.log(i);
        i--;
    }
}
print10To1();

// Activity 3
function print1To5(){
    let i = 1;
    do{
        console.log(i);
        i++;
    }while(i <= 5);
}
print1To5();

function calcFactorial(num){
    let factorial = 0;
    do {
        factorial += num;
        num--;
    }while(num >= 0);
    console.log(`Factorial is: ${factorial}.`);
}
calcFactorial(10);

// Activity 4
function printPattern(){
    for(let i = 0;i < 5; i++){
        let pattern = '';
        for(let j=0; j <= i; j++){
            pattern += '* ';
        }
        console.log(pattern);
    }
}
printPattern();

// Activity 5
function skip5thNum(){
    for(let i = 1;i <= 10; i++){
        if(i === 5){
            continue;
        }
        console.log(i);
    }
}
skip5thNum();


function breakAt7thNum(){
    for(let i = 1;i <= 10; i++){
        if(i === 7){
            break;
        }
        console.log(i);
    }
}
breakAt7thNum();
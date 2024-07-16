// Activity 1
let a = 20, b = -10,c = 0;
function checkNum(num){
    if(num > 0){
        console.log('Positive number.');
    }
    else if(num === 0){
        console.log('Number is 0.');
    }
    else{
        console.log('Negative number.');
    }
}
checkNum(a);
checkNum(b);
checkNum(c);

function checkEligibility(age){
    if(age>=18){
        console.log('Eligible for voting.');
    }else if(age < 0){
        console.log('Please enter a valid age.');
    }
    else{
        console.log('Not eligible for voting.');
    }
}
checkEligibility(a);
checkEligibility(b);

// Activity 2
function checkLargestNum(a, b, c){
    if(a >= b){
        if(a >= c){
            console.log(`${a} is largest number.`);
        }
        else{
            console.log(`${c} is largest number.`);
        }
    }
    else{
        if(b >= c){
            console.log(`${b} is largest number.`);
        }
        else{
            console.log(`${c} is largest number.`);
        }
    }
}
checkLargestNum(a, b, c);

// Activity 3
function checkDay(day){
    switch(day){
        case 1: console.log('Sunday');
                break;
                
        case 2: console.log('Monday');
                break;
        
        case 3: console.log('Tuesday');
                break;
                
        case 4: console.log('Wedneday');
                break;
        
        case 5: console.log('Thursday');
                break;
                
        case 6: console.log('Friday');
                break;
        
        case 7: console.log('Saturday');
                break;
                
        default: console.log('Please enter a valid day!');
    }
}
checkDay(2);

function gradeAssign(percentage){
    switch(true){
        case (percentage>0 && percentage<=33): console.log('F Grade.');
                            break; 
                            
        case (percentage>33 && percentage<=65): console.log('D Grade.');
                            break; 
        
        case (percentage>65 && percentage<=75): console.log('C Grade.');
                            break; 
                            
        case (percentage>75 && percentage<=85): console.log('B Grade.');
                            break; 
        
        case (percentage>85 && percentage<=100): console.log('A Grade.');
                            break;
        
        default: console.log('Please enter a valid grade!');
    }
}
gradeAssign(101);
gradeAssign(-10);
gradeAssign(72);

// Activity 4
function checkEvenOdd(num){
    console.log(((num % 2) === 0)? 'Even number.': 'Odd number.');
}
checkEvenOdd(10);
checkEvenOdd(9);
checkEvenOdd(7);
checkEvenOdd(12);


// Activity 5
function checkForLeapYear(year){
    if(((year % 4) === 0) && ((year % 100) != 0) || ((year % 400) === 0)){
        console.log('Leap Year.');
    }else{
        console.log('Not a leap year.');
    }
}
checkForLeapYear(2024);
checkForLeapYear(2026);
checkForLeapYear(2027);
checkForLeapYear(2016);
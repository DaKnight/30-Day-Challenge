// Activity 1
arr1 = [1, 2, 3, 4, 5];
console.log(arr1)

console.log(arr1[1]);
console.log(arr1[arr1.length-1]);


// Activity 2
arr1.push(6);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift(1);
console.log(arr1);


// Activity 3
const arr2 = arr1.map((num)=>{return num+num});
console.log(arr2);

const arr3 = arr1.filter((num)=>{if((num%2) === 0) return num;})
console.log(arr3);

const sumOfArrayNums = arr1.reduce((accumulator, currentValue)=> accumulator+currentValue, 0);
console.log(sumOfArrayNums);

// Activity 4
for(let i = 0; i<arr1.length;i++){
    console.log(arr1[i]);
}

arr1.forEach(num => {
    console.log(num);
});


// Activity 5
const arr2d = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
for(let i = 0;i<arr2d.length;i++ ){
    if(arr2d[i].length>1){
        for(let j = 0;j<arr2d[i].length;j++){
            console.log(arr2d[i][j]);
        }
    }
    else{
        console.log(arr2d[i]);
    }
}

console.log(arr2d[1][2]);
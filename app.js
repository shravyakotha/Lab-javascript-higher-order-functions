//1

let foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
console.log(foods.slice(1,-1));

//2
console.log(foods.splice(1,0,"noodles", "icecream"));

//3
let numberArray = ["12","324","213","4","2","3","45","4234"];
let isEven = numberArray.filter(function(numberArray){
    return (numberArray % 2) == 0;
});

console.log(isEven);

let isPrime = numberArray.filter(function(numberArray){


    for(var i=2;i<=numberArray/2;i++)
{
    if(numberArray % i===0){
        return false;
    }
    }
return true;  
});
console.log(isPrime);

//4
let numberArray1 = ["12","324","213","4","2","3","45","4234"];
let nonPrime = numberArray1.filter(function(numberArray1){


    for(var i=2;i<=numberArray1/2;i++)
{
    if(numberArray1 % i===0){
        return true;
    }
    }
return false;  
});
console.log(nonPrime);

//5

var even = function (numberArray) {
    return  numberArray% 2 == 0
}

console.log(even(numberArray));

//6

let myArray = ["11", "34", "20", "5", "53", "16"];
let findSquareOfNumbers = myArray.map(function(myArray){
    return myArray*myArray;
    
});
console.log(findSquareOfNumbers);

//7

let arraY = ["2", "3", "5", "10"];
let multiply = arraY.reduce(function(acc,init)
{
    return acc*init;
});
console.log(multiply);











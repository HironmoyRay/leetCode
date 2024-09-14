function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandomNumber(1,6));

let numbers = [4,6,2,1,23,46,35,15];
console.log(numbers.sort((a,b)=>a-b));


function isLeapYear(year){
    if(year%400===0 || (year%4===0 && !(year%100===0))){
        console.log("Leap Year");
    }
    else{
        console.log("Not Leap Year");
        
    }
}
isLeapYear(2026)
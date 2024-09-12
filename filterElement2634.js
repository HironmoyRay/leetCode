const arr = [1,2,3,4,5,6];

const newArr=[];
for(let i=0; i<arr.length; i++){
    if(arr[i]>=3){
        newArr.push(arr[i])
    }
}

console.log(newArr);


const result = arr.filter(filterFunc);

function filterFunc(n){
    return n>=3;
}
// console.log(result);


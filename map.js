const arr = [1,2,3];
const plusOne = (x,y) =>{

    return x+y;
}


function map(arr,plusOne){
    let newArray = [];
    for (let i=0; i<arr.length;i++){
        console.log(plusOne(arr[i],i));
        let val = plusOne(arr[i],i);
        newArray.push(val);
        
    }
    return newArray
}


console.log(map(arr, plusOne ));
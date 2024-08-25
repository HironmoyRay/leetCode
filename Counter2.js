function createCounter(init){
    let i = init;
    return {
        increse(){
            init++
            return init;
        },
        decrese(){
            init--
            return init;
        },
        reset(){
            return i;
        }
    };
}

const val=createCounter(4);
const val1 = val.increse()
const val2 = val.increse()
const val3 = val.decrese()
const val4 = val.reset()
const val5 = val.decrese()
const val6 = val.decrese()

console.log(val6);
console.log(val1)
console.log(val3)
console.log(val4)


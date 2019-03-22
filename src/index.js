module.exports = function getZerosCount(number, base) {
    function getBaseLog(p, n) {
        return Math.log(n) / Math.log(p);
    }
    let arr = [];
    let buf = base;
    for (let i = 2; number > i; i++) {
        if (buf % i === 0) {
            arr.push(i);
            buf /= i;
            i = 1;
        }
    }
    let mem;
    let solution = 0;
    let count;
    arr.forEach((element,index) => {
        mem = 0;
        count = 1;
        for(let j = 0; j < arr.length; j++) {
            if (element === arr[j] && index !== j) {
            count++;
            }
        }
        for(let i = 1; i < getBaseLog(element, number); i++) {
            mem += Math.floor(number / Math.pow(element, i));
        }
        Math.floor(mem /= count);
        if(index === 0) {
          solution = mem;
        }
        if (mem < solution) {
            solution = mem;
        }
    });
    return solution;
}
 
   
  
   
   
//     function getBaseLog(p, n) {
//         return Math.log(n) / Math.log(p);
//     }
    
//     let arr = [];
//     let buf = base;
//     for (let i = 2; number > i; i++) {
//         if (buf % i === 0) {
//             arr.push(i);
//             buf /= i;
//             i = 1;
//         }
//     }
//     let mem;
//     let min = 0;
//     let count = 1;
//     let indexMin;
//     arr.forEach((element, index) => {
//         mem = 0
//         k = getBaseLog(element, number);
//         for(let i = 1; i < getBaseLog(element, number); i++) {
//             mem += Math.floor(number / Math.pow(element, i));
//         }
//         if (mem < min) {
//             min = mem;
//             indexMin = index;
//         }
//     });
//     for(let j of arr) {
//         if (j === arr[indexMin]) {
//             count++;
//         }
//     }
//     return mem/count;
    
// }

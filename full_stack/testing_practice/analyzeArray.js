function analyzeArray(...array){
    const sum = array.reduce((accu,curr)=> accu + curr, 0)
    const average = sum / array.length 
    return {
        average: average,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
}

const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};

console.log(analyzeArray(1,8,3,4,2,6))
module.exports = analyzeArray;
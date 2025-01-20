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

module.exports = analyzeArray;

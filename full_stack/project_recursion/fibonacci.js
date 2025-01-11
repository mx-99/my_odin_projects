function fibs(n){
    let fib = [0,1];
    for(let i = 2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}

function fibsRec(n){
    if(n < 2) return n;
    return fibsRec(n-1) + fibsRec(n-2)
}

console.log(fibs(8))
console.log(fibsRec(8))
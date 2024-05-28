function fibs(n) {
    let fibarr = [];
    if (n === 0) { return fibarr = [0]; }
    else if (n === 1) { return fibarr = [0, 1]; }
    else {
        fibarr = [0, 1];
        for (let i = 2; i < n; i++) {
            let sum = fibarr[fibarr.length - 1] + fibarr[fibarr.length - 2];
            fibarr.push(sum);
        }
    }
    return fibarr;
}



function fibsRec(n) {
    if (n <= 0) { return; }
    else if (n === 1) { return [0]; }
    else if (n === 2) { return [0,1]; }
    else {
        let arr = fibsRec(n-1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log(fibsRec(8))
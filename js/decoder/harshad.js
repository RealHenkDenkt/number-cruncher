let HarshadManager = function () {}

HarshadManager.prototype.isHarshadNumber = function (n){
    // calculate sum of digits
    let sum = 0;
    for (let temp = n; temp > 0; temp = parseInt(temp / 10, 10))
        sum += temp % 10;

    return (n % sum === 0);	
}

HarshadManager.prototype.getNthHarshadNumber = function (n) {
    let counter = 0;
    n = parseInt(n);
    
    for (let c = 1; c <= n; c++) {
        if (this.isHarshadNumber(c)) counter ++;
        if (c === n) return counter;
    }
}

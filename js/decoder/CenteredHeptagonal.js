let CenteredHeptagonalManager = function () {
	
};

CenteredHeptagonalManager.prototype.getNth = function (n) {
	return parseInt((7 * n * n - 7 * n + 2) / 2);
}

CenteredHeptagonalManager.prototype.isCenteredHeptagonal = function (N) {
	let n = (7 + Math.sqrt(56 * N - 7)) / 14;
 
    // Condition to check if the
    // number is a Centered heptagonal number
    return (n - parseInt(n)) == 0;
}

CenteredHeptagonalManager.prototype.getIndex = function (n) {
	let i, k = 0;
	
	for (i = 0; i < n ; i++) {
		if (this.isCenteredHeptagonal(i)) k++;
	}
	
	return k+1;
}
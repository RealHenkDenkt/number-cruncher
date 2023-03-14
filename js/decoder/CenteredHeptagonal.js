let CenteredHeptagonalManager = function () {
	
};

CenteredHeptagonalManager.prototype.getNth = function (n) {
	return (3 * n * n + 3 * n + 2) / 2;	
}

CenteredHeptagonalManager.prototype.isCenteredHeptagonal = function (n) {
	var n = (-3 + Math.sqrt(24 * n - 15)) / 6;
    return (k - parseInt(k)) == 0;
}

CenteredHeptagonalManager.prototype.getIndex = function (n) {
	let i, k = 0;
	
	for (i = 0; i < n ; i++) {
		if (this.isCenteredHeptagonal(i)) k++;
	}
	
	return k;
}
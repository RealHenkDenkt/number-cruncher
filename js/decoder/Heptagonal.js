let HeptagonalManager = function () {
	
};

HeptagonalManager.prototype.getNth = function (n) {
	return parseInt(((5 * n * n) - (3 * n)) / 2);		
}

HeptagonalManager.prototype.isHeptagonal = function (n) {
	 var n = (3 + Math.sqrt(40 * n + 9)) / 10;
    return (n - parseInt(n)) == 0;

}

HeptagonalManager.prototype.getIndex = function (n) {
	let i, k = 0;
	
	for (i = 0; i < n ; i++) {
		if (this.isHeptagonal(i)) k++;
	}
	
	return k;
}
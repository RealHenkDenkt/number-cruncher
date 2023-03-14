let CenteredTriangularManager = function (){
	
};

CenteredTriangularManager.prototype.getIndex = function (n) {
	let i, t = 0;
	
	for (i = 0; i < n; i++) {
		if (this.isCenteredTriangular(i)) t++;
	}
	
	return t;	
};

CenteredTriangularManager.prototype.getNthCenteredTriangular = function (n) {
	  return (3 * n * n + 3 * n + 2) / 2;
};

CenteredTriangularManager.prototype.isCenteredTriangular = function (n) {
	var n = (-3
               + Math.sqrt(24 * n - 15))
              / 6;
 
    // Condition for K to be
    // an integer
    return (n - parseInt(n)) == 0;
};
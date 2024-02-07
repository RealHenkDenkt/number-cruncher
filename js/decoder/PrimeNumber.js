class PrimeNumber {
	types = {
		'composite' : {
			'check' : function (n) {
				if (isPrime(n)) return false;

				return true;
			},
			'byIndex' : function (n) {
				return CompositesList[n-1];
		},
			//'composites' : 	composites,
			'symbol' : 'C'
		},
		prime : {
			check : function (n) {
				if (n > 1999993) return false;
				return isPrime(n);
	
			},
			byIndex : function (n) {
				//if (isPrime(n))
				 return PrimesList[n - 1];
	
		},
			'symbol' : '&prime;'
		},
		'pythagoreanPrime' : {
			'check' : function (n) {
				if (n > 1999993) return false;
				return isPythagoreanPrime(n);
			},
			'byIndex' : function (n) {
				return PythagoreanPrimeList[n -1 ];
				
			},
			'symbol' : '&#9727;',
		},
		'semiPrime' : {
			'check' : function (n) {
				return isSemiPrime(n);
				},
			'byIndex' : function (n) {
				return SemiPrimesList[n - 1];

			},
			'symbol' : '&half;'
		}
	}
}

let isPythagoreanPrime = function (n) {
	return PythagoreanPrimeList.indexOf(n) > -1;
}

let isSemiPrime = function (n) {
	return SemiPrimesList.indexOf(n) > -1;
}

let isPrime = function (n) {
	return PrimesList.indexOf(n) > -1;
	

}

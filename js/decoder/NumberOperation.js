class NumberOperation {
	types = {
		'reduced' : {
			'check' : function (n) {
				return true;
			},
			'calculate' : function (n) {
				if (n === undefined) return n;

			    let reduced = 0;
			    let totalString = n.toString();
			
			    if (totalString.length > 1) {
			        // +1 number
			        for (let i = 0; i < totalString.length; i++) {
			            reduced += Number(totalString[i]);
			        }
			    }
			    if (reduced > 0 && reduced < 10) return reduced;
			
			    if (reduced > 9) {
			        return this.calculate(reduced);
			    }				
			}
		},
		'squared' : {
			'check' : function (n) {
				return true;
			},
			'calculate' : function (n) {
				return (n * n);
			}				
		},
		'cubed' : {
			'check' : function (n) {
				return true;
			},
			'calculate' : function (n) {
				return (n * n * n);
			}				
		},
		'number_x_mirror' : {
			'check' : function (n) {
				return true;
			},
			'calculate' : function (n) {
				let mirror = getMirror(n);
				return n * mirror;
			} 
		},
		'number_+_mirror' : {
			'check' : function (n) {
				return true;
			},
			'calculate' : function (n) {
				let mirror = getMirror(n);
				return n + mirror;
			}
		},
		'summed' : {
			'check' : function (n) {
				return true;
			},
			'calculate' : function (n) {
			    let sum = 0,
        		fac = 0,
        		facM = 0,
        		sumdiv = 0,
        		countDivisors = 0,
        		res = [];

			    for (let i = 1; i <= n; i++) {
        			sum += i;
        			fac = i * fac;
			        let t = n / i;
        			
        			if (isInt(t)) {
            			sumdiv += i;
            			countDivisors ++;
            			res.push(i);
        			}

		        	if (i === n - 1 && fac !== 'Infinity') facM = fac;

				}
				
				divisors[n] = res;
				divisorsFull[n] = sumdiv;
				divisorsPart[n] = sumdiv - n;
				divisorsCount[n] = countDivisors;
				factorizationText[n] = cleanString(factor(n));
				
				if (sum < 9999999 )return sum;
				return '';
				
			}
		},
		'divide9' : {
			'check' : function (n) {
				if (n % 9 ==0 ) return true;
				return false;
			},
			'calculate' : function (n) {
				return (n / 9);
			}
		},
		'divide11' : {
			'check' : function (n) {
				if (n & 11 == 0 ) return true;
				return false;
			},
			'calculate' : function (n) {
				return (n / 11);
			}
		},
		'sqrt' : {
			'check' : function (n) {
				let sqrt = Math.sqrt(n);
				
				return (sqrt - parseInt(sqrt) == 0);				
			},
			'calculate' : function (n) {
				return Math.sqrt(n);
			}
		},
		'number_of_divisors' : {
			'check' : function (n) {
				return true;
			},
			calculate : function (n) {
				return divisorsCount[n];
			}
		},
		'summed_divisors' : {
			'check' : function (n) {
				return true;
			},
			calculate : function (n) {
				return divisorsPart[n];
			}
		},
		'summed_divisors_full' : {
			'check' : function (n) {
				return true;
			},
			calculate : function (n) {
				return divisorsFull[n];
			}
		},
		'factorization_text' : {
			'check' : function (n) {
				return true;
			},
			'calculate' : function (n) {
				return factorizationText[n];
			}
 		},
 		'divisors' : {
			 'check' : function (n) {
				 return true;
			 },
			 'calculate' : function (n) {
				 return divisors[n];
			 }
		 }
		
	}
	constructor () {
		divisors = [];
		divisorsPart = [];
		divisorsFull = [];
		divisorsCount = [];
		divisorsText = [];
		factorizationText = [];
	}
}
let 
	divisors, 
	divisorsPart,
	divisorsFull,
	divisorsCount,
	divisorsText,
	factorizationText;

let factor = function (n) {
	if (isNaN(n) || !isFinite(n) || n % 1 !== 0 || n === 0) return '' + n;
    if (n < 0) return '-' + factor(-n);
    let minFactor = leastFactor(n);
    if (n === minFactor) return '' + n;
    return minFactor + '*' + factor(n / minFactor);
}


let cleanString = function (string) {
    if (string.substring(1, string.length -1) === ',') {
        string = string.substring(0, string.length - 2);
    }

    return string;
}

let leastFactor = function (n) {
    if (isNaN(n) || !isFinite(n)) return NaN;
    if (n === 0) return 0;
    if (n % 1 || n * n < 2) return 1;
    if (n % 2 === 0) return 2;
    if (n % 3 === 0) return 3;
    if (n % 5 === 0) return 5;
    let m = Math.sqrt(n);

    for (let i = 7; i <= m; i += 30) {
        if (n % i === 0) return i;
        if (n % (i + 4) === 0) return i + 4;
        if (n % (i + 6) === 0) return i + 6;
        if (n % (i + 10) === 0) return i + 10;
        if (n % (i + 12) === 0) return i + 12;
        if (n % (i + 16) === 0) return i + 16;
        if (n % (i + 22) === 0) return i + 22;
        if (n % (i + 24) === 0) return i + 24;
    }
    return n;
}

let getMirror = function (n) {
		let mirror = '';
        let numberString = n.toString();
        
        for (let i = numberString.length; i >=0; i--) {
        	if (undefined !== numberString[i-1])  mirror += numberString[i-1];
	    }
	    
	    return parseInt(mirror);

}

let isInt = function (value) {
    return !isNaN(value) &&
        parseInt(Number(value)) === value &&
        !isNaN(parseInt(value, 10));
}
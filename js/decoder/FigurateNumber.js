class FigurateNumber {
	types = {
		'triangular' : {
			'check' : function (n) {
				let t = Math.sqrt((n * 8) + 1); 
				return (t - parseInt(t) == 0); 				
			},
			'byIndex' : function (i) {
				return i * (i + 1) / 2;
			},
			'symbol' : '&#9651;'
		},
		'centeredTriangular' : {
			'check' : function (n) {
				let t = (-3 + Math.sqrt(24 * n - 15)) / 6;
			    return (t - parseInt(n)) == 0;
			},
			'byIndex' : function (i) {
				return (3 * i * i + 3 * i + 2) / 2;	
			},
			'symbol' : '&#9650;'
		},
		'square' : {
			'check' : function (n) {
				let t = Math.sqrt(n);
				return (t - parseInt(t) == 0);
			},
			'byIndex' : function (i) {
				return i * i;
			},
			'symbol' : '&#9633;'
		},
		'centeredSquare' : {
			'check' : function (n) {
				let t = (9 + Math.sqrt(36 * n + 45))/18;  
    			return  (t - parseInt(t) == 0); 
			},
			'byIndex' : function (i) {
				return i * i + ((i - 1) * (i - 1)) 
			},
			'symbol' : '&#9632;'
		},
		'cube' : {
			'check' : function (n) {
				let t = (Math.cbrt(n) );
				return (t - parseInt(t) == 0);	
			},
			'byIndex' : function (i) {
				return (i * i * i);
			},
			'symbol' : '&#9633; &sup3; '
		},
		'centeredCube' : {
			'check' : function (n) {
        		let i = 1; 

        		while (true) { 
		            let ith_term = (2 * i + 1) * (i * i + i + 1); 

		            if (ith_term == n) { 
		                return true; 
		            } 
		 
		            if (ith_term > n) { 
		                return false; 
		            } 
		 
		            i++; 
		        }
	        },
	        'byIndex' : function (i) {
				 i = i -1;
				 return (2 * i + 1) * ( i * i + i + 1);
			},
	        'symbol' : '&#9632; &sup3;'
		},
		'pentagonal' : {
			'check' : function (n) {
				let t = (1 + Math.sqrt(24*n + 1))/6;
     		    return (t - parseInt( t ) == 0);
			},
			'byIndex' : function (i) {
				return (3 * i * i - i) / 2;
			},
			'symbol' : '&#11040;'
		},
		'centeredPentagonal' : {
			'check' : function (n) {
				let t =  ((5 + Math.sqrt(40 * n - 15)) / 10);
 	 		   return (t - parseInt(t) == 0);
			},
			'byIndex' : function (i) {
				return (5 * i * i - 5 * i + 2) / 2;
			},
			'symbol' : '&#11039;'
		},
		'hexagonal' : {
			'check' : function (n) {
				let val = 8 * n + 1;
    			let x = 1 + Math.sqrt(val);
    			let t = (x) / 4;
     
				return (t - parseInt(t) == 0);
			},
			'byIndex' : function (i) {
				return i * (2 * i - 1);
			},
			'symbol' : '&#11041;'
		},
		'centeredHexagonal' : {
			'check' : function (n) {
				let t = (3 + Math.sqrt(12 * n - 3)) / 6;
				return (t - parseInt(t)) == 0;
			},
			'byIndex' : function (i) {
				 return 3 * i * (i - 1) + 1;
			},
			'symbol' : '&#11042;'
		},
		'heptagonal' : {
			'check' : function (n) {
				let t = (3 + Math.sqrt(40 * n + 9)) / 10;
				return (t - parseInt(t)) == 0;				
			},
			'byIndex' : function (i) {
				return parseInt(((5 * i * i) - (3 * i)) / 2);				
			},
			'symbol' : '7'
		},
		'centeredHeptagonal' : {
			'check' : function (n) {
				let t = (7 + Math.sqrt(56 * n - 7)) / 14;
 
			    return (t - parseInt(t)) == 0;				
			},
			'byIndex' : function (i) {
				return parseInt((7 * i * i - 7 * i + 2) / 2);				
			},
			'symbol' : '7'
		},
		'octagonal' : {
			'check' : function (n) {
				let t = (2 + Math.sqrt(12 * n + 4)) / 6;
		        return (t - parseInt(t) === 0);
			},
			'byIndex' : function (i) {
				 return 3 * i * i - 2 * i;
			},
			'symbol' : '&#x2BC3;'
		},
		'centeredOctagonal' : {
			'check' : function (n) {
				let t = (1 + Math.sqrt(n)) / 2;
				return (t - parseInt(t)) == 0;
			},
			'byIndex' : function (i) {
				return 4 * i * (i - 1) + 1;
			},
			'symbol' : '&#x2BC4;'
		},
		'star' : {
			'check' : function (n) {
				let t = (6 + Math.sqrt(24 * n + 12)) / 6;
			    return (t - parseInt(t)) === 0;
			},
			'byIndex' : function (i) {
			    return 6 * i * (i - 1) + 1;
			},
			'symbol' : '&#128972;'
		},
		'tetrahedral' : {
			'check' : function (n) {
				return (Tetrahedrals.indexOf(n) > -1);
			},
			'byIndex' : function (i) {
				return Tetrahedrals[i-1];
			},
			'symbol' : '&#9708;',
			
		}

	}
	constructor () {

	}
}

let Tetrahedrals = [
				1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680, 816, 969, 1140, 1330, 1540, 
				1771, 2024, 2300, 2600, 2925, 3276, 3654, 4060, 4495, 4960, 5456, 5984, 6545, 7140, 7770, 8436, 
				9139, 9880, 10660, 11480, 12341, 13244, 14190, 15180, 16215, 17296, 18424, 19600, 20825, 22100,
				23426, 24804, 26235, 27720, 29260, 30856, 32509, 34220, 35990, 37820, 39711, 41664, 43680, 45760, 
				47905, 50116, 52394, 54740, 57155, 59640, 62196, 64824, 67525, 70300, 73150, 76076, 79079, 82160, 
				85320, 88560, 91881, 95284, 98770, 102340, 105995, 109736, 113564, 117480, 121485, 125580, 129766, 
				134044, 138415, 142880, 147440, 152096, 156849, 161700, 166650, 171700, 176851, 182104, 187460,
			    192920,  198485, 204156, 209934, 215820, 221815, 227920, 234136, 240464, 246905, 253460, 260130,
			    266916, 273819, 280840, 287980, 295240, 302621, 310124, 317750, 325500, 333375, 341376, 349504,
			    357760, 366145, 374660, 383306, 392084, 400995, 410040, 419220, 428536, 437989, 447580, 457310,
			    467180, 477191, 487344, 497640, 508080
		    ]
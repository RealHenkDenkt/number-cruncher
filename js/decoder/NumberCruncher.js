let NumberCruncher = function (number) {
    this.number = number;
    this.elements = [
		'number',
		'composite',
		'prime',
		'pythagorean-prime',
		'semi-prime',
		'fibonacci',
		'triangular',
		'hexagonal',
		'tetrahedral',
		'star',
		'octagonal',
		'lucas',
		'harshad',
		'centeredtriangular',
		'heptagonal',
		'centered-heptagonal',
		'reduced',
		'cubed',
		'summed',
		'divide9',
		'-divide11',
		'times-self',
		'times-mirror',
		'plus-mirror',
		'number-of-divisors',
		'summed-divisors',
		'summed-divisors-full',
		'-divisors',
		'factorization-text',
		'binary',
		'base3',
		'base6',
		'base7',
		'base8',
		'base16'
		
		/**
		
'reduced','cubed''summed','divide9','-divide11','times-self','times-mirror','plus-mirror','number-of-divisors',
'summed-divisors','summed-divisors-full','-divisors','factorization-text','binary','base3','base6',
'base7','base8','base16'
    this.setModalCell(element, '');

		 */
		
		
		
		
	];
}

NumberCruncher.prototype.clearModalContent = function (direction) {
    let element;
    let elements = this.elements;
    
    for (e in elements) {
		if (elements.hasOwnProperty(e)) {
			element = '#fm'+direction+'-'+elements[e];
			this.setModalCell(element, '');
			
		}
	}
}

NumberCruncher.prototype.fillModalContent = function (number) {
    // left
    this.setModalContent(parseInt(number), 'l');
    let mirror = '',
        numberString = number.toString();

    for (let i = numberString.length; i >=0; i--) {
        if (undefined !== numberString[i])  mirror += numberString[i];
    }
    this.setModalContent(parseInt(mirror), 'r');
}

NumberCruncher.prototype.setModalContent = function (number, direction) {
    // clear first
    this.clearModalContent(direction);
    let numberHandler = new NumberHandler();
    numberHandler.setNumber(number);

    // set Number
    let element = '#fm'+direction+'-number';
    this.setModalCell(element, number);
    // set composite
    if (numberHandler.numberProperties.composite !== -1)  {
        element = '#fm'+direction+'-composite';
        this.setModalCell(element, numberHandler.numberProperties.composite);
    } else {
        // set prime
        if (numberHandler.numberProperties.prime !== -1) {
            element = '#fm'+direction+'-prime';
            this.setModalCell(element, numberHandler.numberProperties.prime);
        }
        // set Pythagorean prime
        if (numberHandler.numberProperties.pythagorean_prime !== -1) {
            element = '#fm'+direction+'-pythagorean-prime';
            this.setModalCell(element, numberHandler.numberProperties.pythagorean_prime);
        }
    }
    // Semi prime
    if (numberHandler.numberProperties.semi_prime !== -1) {
        element = '#fm'+direction+'-semi-prime';
        this.setModalCell(element, numberHandler.numberProperties.semi_prime);
    }

    // Fibonacci
    if (numberHandler.numberProperties.fibonacci !== -1) {
        element = '#fm'+direction+'-fibonacci';
        this.setModalCell(element, numberHandler.numberProperties.fibonacci);
    }
    // Triangular
    if (numberHandler.numberProperties.triangular !== -1) {
        element = '#fm'+direction+'-triangular';
        this.setModalCell(element, numberHandler.numberProperties.triangular);
    }
    // Hexagonal
    if (numberHandler.numberProperties.hexagonal !== -1) {
        element = '#fm'+direction+'-hexagonal';
        this.setModalCell(element, numberHandler.numberProperties.hexagonal);
    }
    // Tetrahedral
    if (numberHandler.numberProperties.tetrahedral !== -1) {
        element = '#fm'+direction+'-tetrahedral';
        this.setModalCell(element, numberHandler.numberProperties.tetrahedral);
    }
    // Star
    if (numberHandler.numberProperties.star !== -1) {
        element = '#fm'+direction+'-star';
        this.setModalCell(element, numberHandler.numberProperties.star);
    }
    // Octagonal
    if (numberHandler.numberProperties.octagonal !== -1) {
        element = '#fm'+direction+'-octagonal';
        this.setModalCell(element, numberHandler.numberProperties.octagonal);
    }
    // Lukas
    if (numberHandler.numberProperties.lucas !== -1) {
        element = '#fm'+direction+'-lucas';
        this.setModalCell(element, numberHandler.numberProperties.lucas);
    }
    // Harshad
    if (numberHandler.numberProperties.harshad !== -1) {
        element = '#fm'+direction+'-harshad';
        this.setModalCell(element, numberHandler.numberProperties.harshad);
    }
    
    // Centered Triangular
    if (numberHandler.numberProperties.centeredTriangular !== -1) {
		element = '#fm'+direction+'-centeredtriangular';
		this.setModalCell(element, numberHandler.numberProperties.centeredTriangular);
	}
    
    // Reduced
    element = '#fm'+direction+'-reduced';
    this.setModalCell(element, numberHandler.numberProperties.reduced);
    // Cubed
    element = '#fm'+direction+'-cubed';
    this.setModalCell(element, numberHandler.number * numberHandler.number * numberHandler.number )
    // Summed
    element = '#fm'+direction+'-summed';
    this.setModalCell(element, numberHandler.numberProperties.summed);
    // Divide by 9
    if (numberHandler.number % 9 === 0) {
        element = '#fm'+direction+'-divide9';
        this.setModalCell(element, numberHandler.number / 9);

    }
    if (numberHandler.number % 11 === 0) {
        element = '#fm'+direction+'-divide11';
        this.setModalCell(element, numberHandler.number / 11);
    }
    // TimesSelf
    element = '#fm'+direction+'-times-self';
    this.setModalCell(element, numberHandler.numberProperties.times_self);
    // TimesMirror
    element = '#fm'+direction+'-times-mirror';
    this.setModalCell(element, numberHandler.numberProperties.times_mirror);
    // PlusMirror
    element = '#fm'+direction+'-plus-mirror';
    this.setModalCell(element, numberHandler.numberProperties.plus_mirror);
    // Number of divisors
    element = '#fm'+direction+'-number-of-divisors';
    this.setModalCell(element, numberHandler.numberProperties.count_divisors);
    // Divisors summed
    element = '#fm'+direction+'-summed-divisors';
    this.setModalCell(element, numberHandler.numberProperties.sum_divisors);
    // Divisors summed full
    element = '#fm'+direction+'-summed-divisors-full';
    this.setModalCell(element, numberHandler.numberProperties.sum_divisors_full);
    // Divisors
    element = '#fm'+direction+'-divisors';
    this.setModalCell(element, numberHandler.numberProperties.divisors.join(', '));

    element = '#fm'+direction+'-factorization-text';
    this.setModalCell(element, numberHandler.numberProperties.factorization_text);

    element = '#fm'+direction+'-binary';
    this.setModalCell(element, number.toString(2));
    element = '#fm'+direction+'-base3';
    this.setModalCell(element, number.toString(3));
    element = '#fm'+direction+'-base6';
    this.setModalCell(element, number.toString(6));

    element = '#fm'+direction+'-base7';
    this.setModalCell(element, number.toString(7));
    element = '#fm'+direction+'-base8';
    this.setModalCell(element, number.toString(8));
    element = '#fm'+direction+'-base16';
    this.setModalCell(element, number.toString(16));
}

NumberCruncher.prototype.setModalCell = function (element, value) {
    $(element).html(value);
}

NumberCruncher.prototype.setModalClicks = function () {
    $('#numberCruncherModalTable td').each(function (){
        $(this).on('click', function () {
            if (undefined !== $(this).attr('data-toggle')) {
                $('#numberCruncherModalNumber').attr('value', $(this).attr('data-totals'));
                let numberCruncher = new NumberCruncher(0);
                numberCruncher.fillModalContent($(this).attr('data-totals'));
            }
        })
    });
}
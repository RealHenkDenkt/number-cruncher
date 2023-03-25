$(document).ready(function (){
    let inputs = {
        main: {
            numberIn: $('#numberIn')
        },
        types: {
            primeIn: $('#primeSearchInput'),
            pythagoreanIn: $('#pythaprimeSearchInput'),
            semiPrimeIn: $('#semiprimeSearchInput'),
            tetrahedralIn: $('#tetrahedralSearchInput'),
            triangularIn: $('#triangularSearchInput'),
            pentagonalIn: $('#pentaSearchInput'),
            hexagonalIn: $('#hexaSearchInput'),
            octagonalIn: $('#octaSearchInput'),
            compositeIn: $('#compSearchInput'),
            starIn: $('#starSearchInput'),
            lucasIn: $('#lucasSearchInput'),
            centeredTriangularIn: $('#centeredTriangularSearchInput'),
            heptagonalIn: $('#heptagonalSearchInput'),
            centeredHeptagonalIn: $('#centeredHeptagonalSearchInput'),
       //     harshadIn: $('#harshadSearchInput'),
            fiboIn: $('#fiboSearchInput')
        }
    }

    let results = {
        composite: $('#compSearchResult'),
        prime: $('#primeSearchResult'),
        pythagorean: $('#pythaprimeSearchResult'),
        semiprime: $('#semiprimeSearchResult'),
        tetrahedral: $('#tetrahedralSearchResult'),
        triangular: $('#triangularSearchResult'),
        pentagonal: $('#pentaSearchResult'),
        hexagonal: $('#hexaSearchResult'),
        octagonal: $('#octaSearchResult'),
        star: $('#starSearchResult'),
        lucas: $('#lucasSearchResult'),
        centeredTriangular: $('#centeredTriangularSearchResult'),
        heptagonal: $('#heptagonalSearchResult'),
        centeredHeptagonal: $('#centeredHeptagonalSearchResult'),
    //    harshad: $('#harshadSearchResult'),
        fibo: $('#fiboSearchResult')
    };

    inputs.main.numberIn.on('input', function (){
        let
            number = parseInt($(this).val()),
            numberCruncher = new NumberCruncher();


        if(isNaN(number) || number > 99999) {
            clearSearchResults();
            numberCruncher.clearModalContent('l');
            numberCruncher.clearModalContent('r');
            return;
        }




        numberCruncher.fillModalContent(parseInt($(this).val()));


        // Set index searches
        for (type in inputs.types) {
            if (inputs.types.hasOwnProperty(type)) {
                inputs.types[type].val(number).attr('data-totals', number).trigger('input');
            }
        }
    });

    inputs.types.compositeIn.on('input', function (){
        let compositeManager = new CompositeManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.composite.html(compositeManager.getCompositeByIndex(number));
    });

    inputs.types.primeIn.on('input', function (){
        let manager = new PrimeManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.prime.html(manager.getNthPrime(number));
    });

    inputs.types.pythagoreanIn.on('input', function (){
        let manager = new PrimeManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.pythagorean.html(manager.getNthPythagoreanPrime(number));
    });

    inputs.types.semiPrimeIn.on('input', function (){
        let manager = new PrimeManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.semiprime.html(manager.getNthSemiPrime(number));
    });

    inputs.types.triangularIn.on('input', function (){
        let manager = new TriangularManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.triangular.html(manager.getTriangularByNumber(number));
    });
    inputs.types.pentagonalIn.on('input', function () {
		let manager = new PentagonalManager();
		let number = parseInt($(this).val());
		
		if (isNaN(number) || number > 39999) return;
		
		results.pentagonal.html(manager.getNth(number));
	});
    
    
    inputs.types.hexagonalIn.on('input', function (){
        let manager = new HexagonalManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.hexagonal.html(manager.getHexagonalByNumber(number));
    });
    inputs.types.tetrahedralIn.on('input', function (){
        let manager = new TetrahedralManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.tetrahedral.html(manager.getNth(number));
    });

    inputs.types.starIn.on('input', function (){
        let manager = new StarnumberManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.star.html(manager.getNthStarnumber(number));
    });

	inputs.types.lucasIn.on('input', function (){
		let manager = new LucasManager();
		let number = parseInt($(this).val());
		
		if (isNaN(number) || number > 39999) return;
		
		results.lucas.html(manager.getNthLucasNumber(number));		
	});
	
	inputs.types.centeredTriangularIn.on('input', function (){
		let manager = new CenteredTriangularManager();
		let number = parseInt($(this).val());
		
		if (isNaN(number) || number > 39999) return;

		results.centeredTriangular.html(manager.getNthCenteredTriangular(number));		
	});
	
	inputs.types.heptagonalIn.on('input', function () {
		let manager = new HeptagonalManager();
		let number = parseInt($(this).val());
		if (isNaN(number) || number > 39999) return;
		
		results.heptagonal.html(manager.getNth(number));
	})

	inputs.types.centeredHeptagonalIn.on('input', function () {
		let manager = new CenteredHeptagonalManager();
		let number = parseInt($(this).val());
		if (isNaN(number) || number > 39999) return;
		
		results.centeredHeptagonal.html(manager.getNth(number));
	})
	
/*
	inputs.types.harshadIn.on('input', function (){
		let manager = new HarshadManager();
		let number = parseInt($(this).val());
		
		if (isNaN(number) || number > 39999) return;
		
		results.harshad.html(manager.getNthHarshadNumber(number));
	
	});
*/
    inputs.types.fiboIn.on('input', function (){
        let manager = new FibonaccisManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.fibo.html(manager.getNthFibonacci(number));
    });

    inputs.types.octagonalIn.on('input', function (){
        let manager = new OctagonalManager();
        let number = parseInt($(this).val());

        if(isNaN(number) || number > 39999) return;

        results.octagonal.html(manager.getNthOcta(number));
    });

    // CLEAR PRELOADER
    $('#preloader').hide();

    function clearSearchResults () {
        // Clear index searches
        for (result in results) {
            if (results.hasOwnProperty(result)) {
                results[result].attr('data-value', 0).html('');
            }
        }
    }
    
    inputs.main.numberIn.focus();

});


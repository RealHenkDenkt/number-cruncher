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
            hexagonalIn: $('#hexaSearchInput'),
            octagonalIn: $('#octaSearchInput'),
            compositeIn: $('#compSearchInput'),
            starIn: $('#starSearchInput'),
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
        hexagonal: $('#hexaSearchResult'),
        octagonal: $('#octaSearchResult'),
        star: $('#starSearchResult'),
        fibo: $('#fiboSearchResult')
    };

    inputs.main.numberIn.on('input', function (){
        let
            number = parseInt($(this).val()),
            numberCruncher = new NumberCruncher();


        if(isNaN(number) || number > 39999) {
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

        results.composite.html(compositeManager.getCompositeByIndex(number));
    });

    inputs.types.primeIn.on('input', function (){
        let manager = new PrimeManager();
        let number = parseInt($(this).val());

        results.prime.html(manager.getNthPrime(number));
    });

    inputs.types.pythagoreanIn.on('input', function (){
        let manager = new PrimeManager();
        let number = parseInt($(this).val());

        results.pythagorean.html(manager.getNthPythagoreanPrime(number));
    });

    inputs.types.semiPrimeIn.on('input', function (){
        let manager = new PrimeManager();
        let number = parseInt($(this).val());

        results.semiprime.html(manager.getNthSemiPrime(number));
    });

    inputs.types.triangularIn.on('input', function (){
        let manager = new TriangularManager();
        let number = parseInt($(this).val());

        results.triangular.html(manager.getTriangularByNumber(number));
    });
    inputs.types.hexagonalIn.on('input', function (){
        let manager = new HexagonalManager();
        let number = parseInt($(this).val());

        results.hexagonal.html(manager.getHexagonalByNumber(number));
    });
    inputs.types.tetrahedralIn.on('input', function (){
        let manager = new TetrahedralManager();
        let number = parseInt($(this).val());

        results.tetrahedral.html(manager.getNth(number));
    });

    inputs.types.starIn.on('input', function (){
        let manager = new StarnumberManager();
        let number = parseInt($(this).val());

        results.star.html(manager.getNthStarnumber(number));
    });

    inputs.types.fiboIn.on('input', function (){
        let manager = new FibonaccisManager();
        let number = parseInt($(this).val());

        results.fibo.html(manager.getNthFibonacci(number));
    });

    inputs.types.octagonalIn.on('input', function (){
        let manager = new OctagonalManager();
        let number = parseInt($(this).val());

        results.octagonal.html(manager.getNthOcta(number));
    });

    function clearSearchResults () {
        // Clear index searches
        for (result in results) {
            if (results.hasOwnProperty(result)) {
                results[result].attr('data-value', 0).html('');
            }
        }
    }

});


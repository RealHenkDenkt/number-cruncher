$(document).ready (function (){
    let
        matrixFactor = $('#matrixFactor'),
        factorHighlights = $('#factorHighlights'),
        factorMatrixTypeSelector = $('#factorMatrixTypeSelector'),
        factorMatrixTogglePrimes = $('#factorMatrixTogglePrime'),
        factorMatrixTogglePythagorean = $('#factorMatrixTogglePythagorean'),
        factorMatrixToggleSemi = $('#factorMatrixToggleSemi'),
        factorMatrixToggleTriangular = $('#factorMatrixToggleTriangular'),
        factorMatrixToggleHexagonal = $('#factorMatrixToggleHexagonal'),
        factorMatrixToggleOctagonal = $('#factorMatrixToggleOctagonal'),
        factorMatrixToggleTetrahedral = $('#factorMatrixToggleTetrahedral'),
        factorMatrixToggleStar = $('#factorMatrixToggleStar'),
        factorMatrixToggleLucas = $('#factorMatrixToggleLucas'),
        factorMatrixToggleFibonacci = $('#factorMatrixToggleFibonacci'),
        factorMatrixShowSums = $('#factorMatrixShowSums'),
        factorMatrixNumberOfRows = $('#factorMatrixNumberOfRows'),
        showFactorSums = false;

    factorMatrixShowSums.on('click', function (){
        showFactorSums = false === $(this)[0].checked;
        fillFactorMatrix(matrixFactor.val(), showFactorSums);
    });

    factorMatrixNumberOfRows.on('input', function (){
        fillFactorMatrix(matrixFactor.val(), showFactorSums);
    });

    factorMatrixToggleHexagonal.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightHexagonals();
        } else {
            factorMatrixManager.clearClass('bold-dark-blue');
        }
    });

    factorMatrixToggleOctagonal.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightOctagonals();
        } else {
            factorMatrixManager.clearClass('bold-blue');
        }
    });

    factorMatrixToggleStar.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightStars();
        } else {
            factorMatrixManager.clearClass('bold-yellow');
        }
    });

    factorMatrixToggleLucas.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightLucas();
        } else {
            factorMatrixManager.clearClass('bold-green');
        }

    });
    factorMatrixToggleFibonacci.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightFibonacci();
        } else {
            factorMatrixManager.clearClass('bold-purple');
        }
    });

    factorMatrixTogglePrimes.on('click', function (){
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightPrimes();
       } else {
            factorMatrixManager.clearClass('bold-green');
       }
    })

    factorMatrixTogglePythagorean.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightPythagoreanPrimes();
        } else {
            factorMatrixManager.clearClass('bold-green');
        }
    });

    factorMatrixToggleSemi.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightSemiPrimes();
        } else {
            factorMatrixManager.clearClass('bold-orange');
        }
    });

    factorMatrixToggleTriangular.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightTriangulars();
        } else {
            factorMatrixManager.clearClass('bold-yellow');
        }
    });

    factorMatrixToggleTetrahedral.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightTetrahedrals();
        } else {
            factorMatrixManager.clearClass('bold-red');
        }
    });

    matrixFactor.on('input', function () {
        fillFactorMatrix(matrixFactor.val(), showFactorSums);
    });

    factorHighlights.on('input', function () {
        setFactorMatrixHighlights();
    });

    factorMatrixTypeSelector.on('change', function () {
        fillFactorMatrix($('#matrixFactor').val(), showFactorSums);
    });
});



function setFactorMatrixHighlights() {
    let factorMatrix = new FactorMatrix();
    factorMatrix.setHighlights();
}

function fillFactorMatrix (number, showFactorSums) {
        let factorMatrixNumberOfRows = $('#factorMatrixNumberOfRows').val();

        if (factorMatrixNumberOfRows === '') factorMatrixNumberOfRows = 100;

        let factorMatrix = new FactorMatrix(number, factorMatrixNumberOfRows),
        tableBody = '',
        factorMatrixTableBody = $('#factorMatrixTable tbody');


    factorMatrixTableBody.html('');

    for (let i = 0; i < factorMatrix.collection.length; i++) {
        let tableRow = '<tr>';
        let data = factorMatrix.collection[i][0];
        tableRow += '<td class="factor-matrix-cell">' + (i+1)  + '</td>';
        tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.index + '">' + data.index + '</td>';
        tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.number + '">' + data.number + '</td>';

        if (true === showFactorSums) {
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PI[0] + '">' + data.PI[0] + '(' + data.PI[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PHI[0] + '">' + data.PHI[0] + '(' + data.PHI[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.EULER[0] + '">' + data.EULER[0] + '(' + data.EULER[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT2[0] + '">' + data.SQRT2[0] + '(' + data.SQRT2[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT3[0] + '">' + data.SQRT3[0] + '(' + data.SQRT3[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT5[0] + '">' + data.SQRT5[0] + '(' + data.SQRT5[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT7[0] + '">' + data.SQRT7[0] + '(' + data.SQRT7[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.LEMNI[0] + '">' + data.LEMNI[0] + '(' + data.LEMNI[1] + ')</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.ZETA[0] + '">' + data.ZETA[0] + '(' + data.ZETA[1] + ')</td>';
        } else {
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PI[0] + '">' + data.PI[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PHI[0] + '">' + data.PHI[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.EULER[0] + '">' + data.EULER[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT2[0] + '">' + data.SQRT2[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT3[0] + '">' + data.SQRT3[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT5[0] + '">' + data.SQRT5[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT7[0] + '">' + data.SQRT7[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.LEMNI[0] + '">' + data.LEMNI[0] + '</td>';
            tableRow += '<td class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.ZETA[0] + '">' + data.ZETA[0] + '</td>';
        }

        tableBody += tableRow;
    }

    factorMatrixTableBody.html(tableBody);
    factorMatrix.setHighlights();
    factorMatrix.setModalClicks();


}
$(document).ready(function (){
    let
        textInput = $('#textInput'),
        numberCopy = $('#numberCopy')
    ;

    textInput.on('input', function (){
        numberCopy
            .attr('data-totals', $(this).val())
            .html($(this).val());

    });

    numberCopy.on('click', function () {
        let numberCruncher = new NumberCruncher();
        numberCruncher.fillModalContent($(this).attr('data-totals'));
    })

});
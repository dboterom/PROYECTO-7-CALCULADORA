var numberOne=0;
var numberTwo=0;
var result;

function add() {
    numberOne=$("#number-1").val();
    numberTwo=$("#number-2").val();
    result=Number(numberOne)+Number(numberTwo);
    console.log(result);
}

function subtract() {
    numberOne=$("#number-1").val();
    numberTwo=$("#number-2").val();
    result=Number(numberOne)-Number(numberTwo);
    console.log(result);
}

function resultado (numberOne,numberTwo) {
    result=numberOne*numberTwo;
    console.log(result);
}

function byPass () {
    numberOne=$("#number-1").val();
    numberTwo=$("#number-2").val();
    resultado(numberOne, numberTwo);
}
var num1: HTMLInputElement = <HTMLInputElement>document.getElementById("num1");
var num2: HTMLInputElement = <HTMLInputElement>document.getElementById("num2");
var display:HTMLInputElement=<HTMLInputElement>document.getElementById("display");
function addition(){
    var number1: number = parseInt(num1.value);
    var number2: number = parseInt(num2.value);

    var SumOfnos: number = number1 + number2;
  
    display.value = SumOfnos.toString();
 
  

}
function multiplication(){
    var number1: number =parseInt(num1.value);
    var number2: number =parseInt(num2.value);

    var multiplicationOfnos : number= number1*number2;
    display.value = multiplicationOfnos.toString();
   
}

function division(){
    var number1: number=parseFloat(num1.value);
    var number2 : number=parseFloat(num2.value);
    
    var division : number= number1/number2;
    display.value = division.toString();
}
function substraction(){
    var number1: number=parseInt(num1.value);
    var number2: number=parseInt(num2.value);

    var substraction : number=number1-number2;
    display.value = substraction.toString();
}
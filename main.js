function btnOne(){
}
function btnTwo(){
    calc.text.value+='2';
}
function btnThree(){
    calc.text.value+='3';
}
function btnFour(){
    calc.text.value+='4';
}
function btnFive(){
    calc.text.value+='5';
}
function btnSix(){
    calc.text.value+='6';
}
function btnPlus(){
    calc.text.value+='+';
}
function btnMinus(){
    calc.text.value+='-';
}
function btnProduct(){
    calc.text.value+='*';
}
function btnDivide(){
    calc.text.value+='/';
}
function myResult(){
    calc.text.value=eval(calc.text.value);
}
function btnClear()
    {
    calc.text.value='';
}
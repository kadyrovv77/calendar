// Function decleration
// return
//parametry

//name();

function name () {
    console("abu bakr");
}
//name ();

function calculateAndlogNumber(){
    let x = 5;
    x = x + 100;
    console.log(x);
}

calculateAndlogNumber ();

function calculateAndlogNumber(){
    let x = 5;
    x = x + 100;
    x = x / 5;

    return x;

}

let result = calculateAndlogNumber();
console.log(result);

function calculateAndlogNumberArg(initialvalue){
    let x = initialvalue;
    x = x + 100;
    x = x / 10;

    return x;
}

 let result1 = calculateAndlogNumberArg(10);
 console.log(result);

 function plus(a, b){
    return a + b;
 }
 let resulplus = plus(20, 30);
 console.log(resulplus);

 function divide(a, s){
    return a - s;
 }

 let resultdivide = divide(70, 4);
 console.log(resultdivide);

 function multiplay(a, b){
    return a * b;
 }

 let resultmultiplay = multiplay(60, 5);
 console.log(resultmultiplay);

 function minus(a, d){
    return a - d;
 }

 let resultminus = minus(90,4);
 console.log(resultminus);
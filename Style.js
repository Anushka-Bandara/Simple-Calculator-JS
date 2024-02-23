

let input = "55+9";
let match = input.match(/([+\-*/])\d+$/);

let result = match ? match[0].substring(1) : '';
console.log(result);

let q = "-23+88558 ";
let t = q.replace(/^\d+([-+*/])/, '');
console.log("----->" + t);



let num1 = 0;  // Initialize num1 and num2 to appropriate values
let num2 = 0;
let operator;

function addtext() {

    if (num1 == 0) {

        num1 = parseFloat(document.getElementById("txt").value);  // Convert to number
        console.log(num1);
    } else {

        let input = document.getElementById("txt").value;
        console.log(".'.'.''.'  " + input);
        let match = input.match(/([+\-*/])\d+$/);

        let result = match ? match[0].substring(1) : '';
        console.log("--------><>>>" + result);



        // let a = document.getElementById("txt").value;
        // let numbersWithoutOp = a.replace(/^\d+([-+*/])/, '');
        //let numbersWithoutOp = a.replace(/^\d+\+/g, '');
        //console.log("-----" + numbersWithoutOp);
        num2 = parseFloat(result);  // Convert to number
        console.log(num2);
    }
}

function performCalculation() {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "":
            return 0;
    }
}

//--------  Calculations -----------------

function clickbtne() {
    let x = parseFloat(document.getElementById("b=").value);

    console.log(x);
    addtext();

    console.log(num1);
    console.log(num2);

    document.getElementById("txt").value = performCalculation();

    num1 = 0;
    num2 = 0;
    operator = undefined;
}

//--------Add Buttons Operators  to text Field  & save first input -----------------

function clickbtnp() {
    operator = "+";
    addtext();

    let x = document.getElementById("b+").value;
    console.log(x);
    document.getElementById('txt').value += x;
}
function clickbtnd() {

    operator = "/";
    addtext();

    let x = document.getElementById("b/").value;
    console.log(x);
    document.getElementById('txt').value += x;

}

function clickbtnM() {

    operator = "*";
    addtext();

    let x = document.getElementById("b*").value;
    console.log(x);
    document.getElementById('txt').value += x;

}
function clickbtnm() {
    let y = document.getElementById('txt').value;
    if (y == "-") {
        document.getElementById('txt').value = "-";

    } else {
        operator = "-";
        addtext();

        let x = document.getElementById("b-").value;
        console.log(x);
        document.getElementById('txt').value += x;


    }


}

//--------Add Buttons Values  to text Field  -----------------

function clickbtn1() {

    let x = document.getElementById("b1").value;
    console.log(x);
    document.getElementById('txt').value += x;
}
function clickbtn2() {

    let x = document.getElementById("b2").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
}
function clickbtn3() {

    let x = document.getElementById("b3").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
}

function clickbtn4() {

    let x = document.getElementById("b4").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
} function clickbtn5() {

    let x = document.getElementById("b5").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
}
function clickbtn6() {

    let x = document.getElementById("b6").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
}
function clickbtn7() {

    let x = document.getElementById("b7").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
}
function clickbtn8() {

    let x = document.getElementById("b8").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
}
function clickbtn9() {

    let x = document.getElementById("b9").value;
    console.log(x);
    document.getElementById('txt').value += + x;
    y = x;
}

function clickbtnC() {

    let x = document.getElementById("bC").value;
    console.log(x);
    document.getElementById('txt').value = x;

} function clickbtn0() {

    let x = document.getElementById("b0").value;
    console.log(x);
    document.getElementById('txt').value += x;
    y = x;
}

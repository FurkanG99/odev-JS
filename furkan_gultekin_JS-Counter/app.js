// let decreaseValue = document.getElementById= 'decrease';
// let increaseValue = document.getElementById= 'increase';
// let value = document.getElementById = 'value';

let value = 0

function decreaseVal(){
    value--;
    Counter();
    changeColor();
}

function increaseVal(){
    value ++;
    Counter();
    changeColor();
}
function sifirla(){
    value = 0;
    Counter();
}

function Counter(){
    document.getElementById("value").innerHTML = value;
    changeColor()
}

function changeColor(){
    let color = value < 0 ? "red" : (value > 0 ? "green" : "black");
    document.getElementById("value").style.color = color;
}


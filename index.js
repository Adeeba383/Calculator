
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

function clearDisplay(){
    display.value = "";
}

function deleteDisplay(){

    display.value = display.value.slice(0, -1);
}

function toggleSign(){
    const currentValue = display.value;
    if(currentValue){
        if(!isNaN(currentValue)){
            display.value = (parseFloat(currentValue) * -1).toString();
        }
    }
}


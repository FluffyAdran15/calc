"use strict";
//Global variables


var num1 = "";//store first num
var num2 = "";//store second num
var operator;//stores the value
var flag = false;//boolean false if we havent use a operator
var equalTo = false;//boolean havent pressed equal sign
var display = document.getElementById("display");





//calculator

//function to set numbers into num1 or num2 variables
function setValue(number){

    if(equalTo === true){
        clearButton();
    }


    if(flag === false){
        num1 += number;
        display.innerHTML = num1;
    }

    if(flag === true){
        num2 += number;
        display.innerHTML += number;
    }

    if(num1.length > 10 || num2.length > 10){
        display.innerHTML = "Max limit of Digit reached";
        alert("Raid Shadow Legends is a turn based rpg done right. In case you’ve been living under a rock and haven’t heard, raid is a bada55 mobile game that changes everything. The game is crazy popular, with almost 15 million downloads in the last 6 months. Raid is an epic dark fantasy done right. A hero collecting turn based game with over 400 champions to collect and customize. In raid you can get knights orcs undead and more. Raid with friends in a clan, claim glory in the pvp arena. Some other cool features are multi battle auto mode, set battles to run in auto mode while you do something else. Spend less time grinding and more time developing your team and finding the fun stuff. They also have weekly tournaments and events, such as fighting in the arena, running special dungeons, or leveling up your hero’s. There’s always a way to compete and win extra prizes every week. The game is growing super fast, check out this road map they’ve published. They actually have huge plans for updates over the next 6 months. There’s Infinite content for you to enjoy no time to get bored. A new faction, a tag team arena feature, and even a new clan boss you’ll be able to fight with your clan mates. You can find me under the name ______ and you can even join my clan. Go to the link in the description and you’ll get 50,000 silver and a free epic champion as part of the new player program. Start your journey today!");
    }
}


//function clear the calculator

function clearButton(){
    num1 = "";
    num2 = "";
    display.innerHTML = "";
    equalTo = false;
    flag =false;
}



//function for storing and selecting the operator value
function setOperator(number){
    operator = number;
    var opString = "";
    flag = true;
    if(operator === 6){
        display.innerHTML += "&#178;"
        opString += "&#178;"
    } else if(operator === 4){
        display.innerHTML += " / ";
        opString += " / ";
    }else if(operator === 3){
        display.innerHTML += " * ";
        opString += " * ";
    }else if(operator === 2){
        display.innerHTML += " - ";
        opString += " - ";
    }
    else if(operator === 1){
        display.innerHTML += " + ";
        opString += " + ";
    }
    //for getting rid of multiple operator
    if(flag === true){
        display.innerHTML = num1 + opString;
    }
// dose not let us before entering
    if(flag === true && num1 === ""){
        clearButton();
    }

    if(equalTo === true){
        clearButton();
    }
    if(operator === 7){
        equalClick()
    }else if( operator === 5){
        equalClick();
    }

}



//function to solve math equation
function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";
    if(operator === 5){
        result = Math.sqrt(num1);
    }
    else if(operator === 6){
        result = num1 * num1;
    }
    else if(operator === 7){
        result = 1 / num1;
    }
    else if(operator === 1){
        result = num1 + num2 ;
    }
    else if( operator === 2){
        result = num1 - num2;
    }
    else if(operator === 3){
        result = num1 * num2;
    }
    else{
        result = num1 / num2;
    }


    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if(roundedResult === "Infinity"){
        display.innerHTML = "Cannot divide this"
    }else if(roundedResult === "NaN"){
        display.innerHTML = "not Good"
    }
}


// creating the backspace
function backSpace(){
    var temp1 = "";
    var temp2 = "";
    if(equalTo === true){
       
    }
    if(flag === false){
        temp1 = num1.substring(0, num1.length-1);
        num1 = temp1;
        display.innerHTML = num1;
    }else if(flag === true){
        display.innerHTML = num1;
        flag = false;

    }

    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;
        opSetString()
       
    }
}


//function for adding decimal
function setDecimal(){
    if (flag === false){
        if(num1 === ""){
            num1 = "0.";
            display.innerHTML = num1;
        }
        if (num1.indexOf(".") === -1){
            num1 += ".";
            display.innerHTML = num1;
        }
    }
    if (flag === true){
        if(num2 === ""){
            num2 = "0.";
            display.innerHTML += num2;
        }
        if (num2.indexOf(".") === -1){
            num2 += ".";
            opSetString(operator);
        }
    }
}

function opSetString(op){
    if(op === 1){
        display.innerHTML = num1 + " + " + num2;
    }else if(op === 2){
        display.innerHTML = num1 + " - " + num2;
    }else if(op === 3){
        display.innerHTML = num1 + " * " + num2;
    }else{
        display.innerHTML = num1 + " / " + num2;
    }
}

// square root  exponent  ce inverse

function newLine(){
    if(flag === false){
        clearButton();
    }else{
        if(operator === 1 ){
            display.innerHTML = num1 + " + ";
        }else if(operator === 2 ){
            display.innerHTML = num1 + " - ";
        }else if(operator === 3 ){
            display.innerHTML = num1 + " * ";
        }else{
            display.innerHTML = num1 + " / ";
        }
    }
}


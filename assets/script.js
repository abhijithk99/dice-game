var random_index
var random_img
var score1 = 0;
var score2 = 0;
currentScore1 = 0;
currentScore2 = 0;
var i = 0
var v = document.getElementById("showOrHide");

 const img_array = [
    'assets/images/dice1.png',
    'assets/images/dice2.png',
    'assets/images/dice3.png',
    'assets/images/dice4.png',
    'assets/images/dice5.png',
    'assets/images/dice6.png'
];

function incrementValue(){
 i++
 if((i%2)==0){
    img_selector2()
}
else{
    img_selector1()
}
}



function img_selector1() {  
	const randomIndex = Math.floor(Math.random() * img_array.length); 
    diceScore = randomIndex + 1
    currentScore1 += diceScore
	document.querySelector('img').src =img_array[randomIndex]; 
    document.getElementById('score1').innerHTML = currentScore1; 
    if(currentScore1 > 25){
        alert("player 1 won")
      //  result1()
        reset()
        
    }
    else{
        newGame
    }
}

function img_selector2() {  
	const randomIndex = Math.floor(Math.random() * img_array.length); 
    diceScore = randomIndex + 1
    currentScore2 += diceScore
	document.querySelector('img').src =img_array[randomIndex]; 
    document.getElementById('score2').innerHTML = currentScore2; 
    if(currentScore2 > 25){
        alert("player 2 won") 
       // result2()
        reset()
        resultAlert()  
    }
    else{
        newGame
    }
}
/*function result1(){
    document.getElementById('result').innerHTML = "player 1 won"; 
}
function result2(){
    document.getElementById('result').innerHTML = "player 2 won"; 
}*/
function reset(){
    score1 = 0;
    score2 = 0;
    currentScore1 = 0;
    currentScore2 = 0;
    i = 0
    document.getElementById('score1').innerHTML = 0;
    document.getElementById('score2').innerHTML = 0; 
}
/*function newGame(){
    var alert = document.getElementById("alertbox");
    alert.style.display = "none"
    reset()
}
function resultAlert(){
    var alert = document.getElementById("alertbox");
    alert.style.display = "block"
}*/
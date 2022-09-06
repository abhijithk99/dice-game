var random_index
var random_img
var score1 = 0;
var score2 = 0;
currentScore1 = 0;
currentScore2 = 0;

 const img_array = [
    'assets/images/dice1.png',
    'assets/images/dice2.png',
    'assets/images/dice3.png',
    'assets/images/dice4.png',
    'assets/images/dice5.png',
    'assets/images/dice6.png'
];


function img_selector1() {  
	const randomIndex = Math.floor(Math.random() * img_array.length); 
    diceScore = randomIndex + 1
	document.querySelector('img').src =img_array[randomIndex]; 
    document.getElementById('score1').innerHTML = currentScore1.toString(); 
    currentScore1 += diceScore
    if(currentScore1 >= 25){
        result1()
    }
}
function img_selector2() {  
	const randomIndex = Math.floor(Math.random() * img_array.length); 
    diceScore = randomIndex + 1
	document.querySelector('img').src =img_array[randomIndex]; 
    document.getElementById('score2').innerHTML = currentScore2.toString(); 
    currentScore2 += diceScore
    if(currentScore2 >= 25){
        result2()
    }
}
function result1(){
    document.getElementById('result').innerHTML = "player 1 won"; 
}
function result2(){
    document.getElementById('result').innerHTML = "player 2 won"; 
}
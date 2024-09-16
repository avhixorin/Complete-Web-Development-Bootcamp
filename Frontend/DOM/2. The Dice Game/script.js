var randomNum1 = Math.floor((Math.random()*6)+1);
var randomNum2 = Math.floor((Math.random()*6)+1);
var imgSrc = document.querySelector("img").getAttribute("src");
if(randomNum1===1){
    document.querySelector(".img1").setAttribute("src", "./Assets/dice1.png");
}
else if(randomNum1===2){
    document.querySelector(".img1").setAttribute("src", "./Assets/dice2.png");    
}
else if(randomNum1===3){
    document.querySelector(".img1").setAttribute("src", "./Assets/dice3.png");    
}
else if(randomNum1===4){
    document.querySelector(".img1").setAttribute("src", "./Assets/dice4.png");    
}
else if(randomNum1===5){
    document.querySelector(".img1").setAttribute("src", "./Assets/dice5.png");    
}
else if(randomNum1===6){
    document.querySelector(".img1").setAttribute("src", "./Assets/dice6.png");    
}

if(randomNum2===1){
    document.querySelector(".img2").setAttribute("src", "./Assets/dice1.png");
}
else if(randomNum2===2){
    document.querySelector(".img2").setAttribute("src", "./Assets/dice2.png");    
}
else if(randomNum2===3){
    document.querySelector(".img2").setAttribute("src", "./Assets/dice3.png");    
}
else if(randomNum2===4){
    document.querySelector(".img2").setAttribute("src", "./Assets/dice4.png");    
}
else if(randomNum2===5){
    document.querySelector(".img2").setAttribute("src", "./Assets/dice5.png");    
}
else if(randomNum2===6){
    document.querySelector(".img2").setAttribute("src", "./Assets/dice6.png");    
}

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML="Its a tie";     
}
else{
    document.querySelector("h1").innerHTML="Player 2 Won";   
}
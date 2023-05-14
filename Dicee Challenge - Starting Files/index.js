
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceimage="images/"+"dice"+randomNumber1+".png";
var randomDiceimag="images/"+"dice"+randomNumber2+".png";


function play(){
console.log("success");
document.querySelector(".img1").setAttribute("src",randomDiceimage);
document.querySelector(".img2").setAttribute("src",randomDiceimag);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent="Draw"
}
else{
    document.querySelector("h1").textContent="Player 2 Wins"
}
}
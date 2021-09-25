//Player 1
var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var imagepath1 = "images/" + randomImage1;
var player1Image = document.querySelector(".player1");
player1Image.setAttribute("src", imagepath1);

//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var imagepath2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".player2").setAttribute("src", imagepath2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Won";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Won";
}else{
    document.querySelector("h1").textContent = "Draw";
}

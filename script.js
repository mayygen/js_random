var heading = document.getElementById("title");
var button = document.getElementById("button");
var outputText = document.getElementById("instructions");
var outputImage = document.getElementById("picture");
var input = document.getElementById("input");


var cheesecakeArray = [];
cheesecakeArray[0] = "photos/cheesecake.png";
cheesecakeArray[1] = "photos/cheesecake2.png";
cheesecakeArray[2] = "photos/cheesecake3.png";
cheesecakeArray[3] = "photos/cheesecake4.png";

var chocolatecakeArray = [];
chocolatecakeArray[0] = "photos/chocolatecake.png";
chocolatecakeArray[1] = "photos/chocolatecake2.png";
chocolatecakeArray[2] = "photos/chocolatecake3.png";
chocolatecakeArray[3] = "photos/chocolatecake4.png";

var icecreamArray = [];
icecreamArray[0] = "photos/icecream.png";
icecreamArray[1] = "photos/icecream2.png";
icecreamArray[2] = "photos/icecream3.png";
icecreamArray[3] = "photos/icecream4.png";


var macaronArray = [];
macaronArray[0] = "photos/macarons.png";
macaronArray[1] = "photos/macarons2.png";
macaronArray[2] = "photos/macarons3.png";
macaronArray[3] = "photos/macarons4.png";


var textArray = [
  "you should have some cheesecake today!",
  "how about some chocolate cake?",
  "grab a scoop (or two) of ice cream!",
  "have a bunch of macarons :)"
  ];

button.addEventListener("click", function(){
  var currentNum = input.value;
  generate(currentNum);
});

button.addEventListener("click", function(){
  var currentNum = input.value;
  restyle(currentNum);
});


function generate(input){

  var randomIndex = Math.floor(Math.random() * cheesecakeArray.length);

  if (input == 0){
    outputText.innerText = textArray[0];
    outputImage.src = cheesecakeArray[randomIndex];
  }
  else if (input == 1){
    outputText.innerText = textArray[1];
    outputImage.src = chocolatecakeArray[randomIndex];
  }
  else if (input == 2){
    outputText.innerText = textArray[2];
    outputImage.src = icecreamArray[randomIndex];
  }
  else if (input == 3){
    outputText.innerText = textArray[3];
    outputImage.src = macaronArray[randomIndex];
  } else {
    outputText.innerText = "try again :( with a number from 0-3!";
  }
}

function restyle (input){
  if (input == 0){
    document.body.style.borderStyle = "dotted";
    document.body.style.borderWidth = "1vw";
    document.body.style.borderColor = "#8f0110";
    document.body.style.backgroundColor = "#ffedde";
    outputText.style.color = "#8f0110";
    heading.style.color = "#8f0110";
  }
  else if (input == 1){
    document.body.style.borderStyle = "double";
    document.body.style.borderWidth = "0.5vw";
    document.body.style.borderColor = "white";
    document.body.style.backgroundColor = "#7a2626";
    outputText.style.color = "#301102";
    heading.style.color = "black";

  }
  else if (input == 2){
    document.body.style.borderStyle = "dashed";
    document.body.style.borderWidth = "0.5vw";
    document.body.style.borderColor = "#5c2200";
    document.body.style.backgroundColor = "#def5ff";
    outputText.style.color = "#e0a046";
    heading.style.color = "#e0a046";

  }
  else if (input == 3){
    document.body.style.borderStyle = "solid";
    document.body.style.borderWidth = "0.8vw";
    document.body.style.borderColor = "white";
    document.body.style.backgroundColor = "#ecd4ff";
    outputText.style.color = "#e84a87";
    heading.style.color = "#e84a87";

  } else{
    outputText.style.color = "red";

  }

}

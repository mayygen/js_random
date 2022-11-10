var heading = document.getElementById("title");
var button = document.getElementById("button");
var outputText = document.getElementById("instructions");
var outputImage = document.getElementById("picture");
var input = document.getElementById("input");



var imgArray = [];

imgArray[0] = "photos/cheesecake.png";

imgArray[1] = "photos/chocolatecake.png";

imgArray[2] = "photos/icecream.png";

imgArray[3] = "photos/macarons.png";


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

  if (input == 0){
    outputText.innerText = textArray[0];
    outputImage.src = imgArray[0];
  }
  else if (input == 1){
    outputText.innerText = textArray[1];
    outputImage.src = imgArray[1];
  }
  else if (input == 2){
    outputText.innerText = textArray[2];
    outputImage.src = imgArray[2];
  }
  else if (input == 3){
    outputText.innerText = textArray[3];
    outputImage.src = imgArray[3];
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

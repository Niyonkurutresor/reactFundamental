var numberOfElement = document.querySelectorAll(".drum").length;
for (var i = 0; i< numberOfElement; i++){


    var selectedElement = document.querySelectorAll(".drum")[i];


    selectedElement.addEventListener("click",function (){
       var clickedText = this.innerText
       makesound(clickedText)
        buttonAnimation(clickedText)
    })


}


document.addEventListener("keypress",function(par){
var parameterKey =par.key;
makesound(parameterKey)
buttonAnimation(parameterKey)
})




function makesound(WhatToConsider){
    switch(WhatToConsider){
        case "w":
            var audio =new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

            case "a":
            var audio =new Audio("./sounds/tom-2.mp3")
            audio.play();
            break;

            case "s":
            var audio =new Audio("./sounds/tom-3.mp3")
            audio.play();
            break;

            case "d":
            var audio =new Audio("./sounds/tom-4.mp3")
            audio.play();
            break;

            case "j":
                var audio =new Audio("./sounds/snare.mp3")
                audio.play();
                break;
    
            case "k":
                var audio =new Audio("./sounds/crash.mp3")
                audio.play();
                break;
    
            case "l":
                var audio =new Audio("./sounds/kick-bass.mp3")
                audio.play();
                break;

            default:
                alert("you place the wrong key")
                break;
    }

}



function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey)
   activeButton.classList.add("pressed")
   setTimeout(function() {
    activeButton.classList.remove("pressed")
   }, 200);
}
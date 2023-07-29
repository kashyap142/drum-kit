var n = document.querySelectorAll(".drum").length;

var clickButtons = ['w','a','s','d','j','k','l'];

// button click detector
for(var i=0; i<n; i++) {
    var btnClick = document.querySelectorAll("button")[i].addEventListener("click" , function() {    
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}


// keypress detector
document.addEventListener("keydown",function(event) {
    var key = event.key;
    if(clickButtons.includes(event.key)) {
        makeSound(event.key);
        buttonAnimation(event.key);
    }
});


// to make sound according to key
function makeSound(key) {
    switch(key) {
        case 'w' : 
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
        break;
        case 'a' : 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case 's' : 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case 'd' : 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j' : 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case 'k' : 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case 'l' : 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
    }
}


function buttonAnimation(currentKey) {
    var key = document.querySelector("." + currentKey);
    key.classList.toggle("pressed");
    setTimeout(function() {
        key.classList.remove("pressed");
    } , 100);
}
document.addEventListener('keydown', logKey);

function logKey(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var w = 'sounds/tom-1.mp3';
            var audio = new Audio(w);
            audio.play();
            break;

        case "a":
            var w = 'sounds/tom-2.mp3';
            var audio = new Audio(w);
            audio.play();
            break;    

        case "s":
            var w = 'sounds/tom-3.mp3';
            var audio = new Audio(w);
            audio.play();
            break;

        case "d":
            var w = 'sounds/tom-4.mp3';
            var audio = new Audio(w);
            audio.play();
            break;

        case "j":
            var w = 'sounds/snare.mp3';
            var audio = new Audio(w);
            audio.play();
            break;

        case "k":
            var w = 'sounds/kick-bass.mp3';
            var audio = new Audio(w);
            audio.play();
            break;

        case "l":
            var w = 'sounds/crash.mp3';
            var audio = new Audio(w);
            audio.play();
            break;

        default:
            break;
    }
}




for(var i=0;i<7;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function (){

var buttoninnerhtml=this.innerHTML;
 makesound(buttoninnerhtml);
buttonAnimation(buttoninnerhtml);


  });
}
document.addEventListener("keypress",function(event){

makesound(event.key);
buttonAnimation(event.key)


});

function makesound(key){

    switch (key) {
    case "w":
    var crash = new Audio('Sounds/tom-3.mp3');
       crash.play();
      break;
      case "a":
      var kick = new Audio('Sounds/tom-4.mp3');
         kick.play();
        break;
        case "s":
        var snare = new Audio('Sounds/snare.mp3');
           snare.play();
          break;
          case "d":
          var tom1 = new Audio('Sounds/tom-1.mp3');
             tom1.play();
            break;
            case "j":
            var tom2 = new Audio('Sounds/tom-2.mp3');
               tom2.play();
              break;
              case "k":
              var tom3 = new Audio('Sounds/tom-3.mp3');
                 tom3.play();
                break;
                case "l":
                var tom4 = new Audio('Sounds/tom-4.mp3');
                   tom4.play();
                  break;
    default:
    console.log("no button is clicked");

    }
}


function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

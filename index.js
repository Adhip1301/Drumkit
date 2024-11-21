// Get the cursor container element
const cursorContainer = document.getElementById('cursor-container');

// Create the cursor element
const cursor = document.createElement('div');
cursor.className = 'cursor';
cursorContainer.appendChild(cursor);

// Get the cursor element's bounding rectangle
const cursorRect = cursor.getBoundingClientRect();

// Set the initial cursor position
let cursorX = 0;
let cursorY = 0;

// Add an event listener to track mouse movement
document.addEventListener('mousemove', (e) => {
  // Update the cursor position
  cursorX = e.clientX;
  cursorY = e.clientY;

  // Update the cursor's transform using GSAP
  gsap.to(cursor, {
    duration: 0.2,
    x: cursorX,
    y: cursorY,
    ease: 'power2.out',
  });
});


for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",clicker);
function clicker(){
  var buttoninnerhtml=this.innerHTML;
  makesound(buttoninnerhtml);
  addanimation(buttoninnerhtml);

}
}

document.addEventListener("keydown",function(even)
{
  makesound(even.key);
  addanimation(even.key);
});

function makesound(key){
switch(key){
  case "w":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
    
    case "a":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

      case "s":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;

      case "d":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case "j":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

      case "k":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

      case "l":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

      default:
        console.log("not valid");


}
}

function addanimation(key)
{
  var activebutton=document.querySelector("."+key);
  activebutton.classList.add("pressed");
   setTimeout(function()
  {
    activebutton.classList.remove("pressed");
  },100)
}




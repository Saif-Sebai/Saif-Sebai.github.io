let btnGroup = document.querySelector('.button-layout');
let buttons = document.querySelectorAll('.button');
let title = document.querySelector('h2');
let subtitle = document.querySelector('h4');




// THIS IS FOR TEXT GENERATION EFFECT

function splitText(textEl) {
  if(!textEl || !textEl.innerHTML) {
    return
  }
  
  let text = textEl.innerHTML.split('');
  textEl.innerHTML = '';
  text.forEach((letter) => {
    let span = document.createElement('span');
    span.innerHTML = letter;
    textEl.appendChild(span);
  });
}

splitText(title);
splitText(subtitle);

gsap.to(btnGroup, {
  opacity: 1, 
  delay: .5,
  duration: .5
});

buttons.forEach((button, i) => {
  gsap.to(button, {
    x: 0, 
    opacity: 1, 
    delay: .5 + (.1 * i),
    duration: .2
  });
});

let headingLetters = title.querySelectorAll('span');
headingLetters.forEach((letter, i) => {
  gsap.to(letter, {
    opacity: 1, 
    delay: .75 + (.075 * i),
    duration: .05
  });
});


let subheadingLetters = subtitle.querySelectorAll('span');
subheadingLetters.forEach((letter, i) => {
  gsap.to(letter, {
    opacity: 1, 
    delay: .75 + (.075 * i),
    duration: .05
  });
});

// END OF TEXT GENERATION EFFECT



$('.Show').click(function() {
  $('#target1').show(500);
  $('.Show').hide(0);
  $('.Hide').show(0);
});

$('.Hide').click(function() {
  $('#target').hide(500);
  $('.Show').show(0);
  $('.Hide').hide(0);
});

$('.toggle').click(function() {
  $('#target1').toggle(400);
});

function togglee() {
  $('#target1').toggle(400);
  // $('#CARDS_CLASS').toggle(400);
  
  // toggleTheme()
}



// CHECK FOR MOBILE via regex
// source: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// Call the mobileCheck function
var isMobile = mobileCheck();

var myDiv = document.getElementById("your-div-id");
// myDiv.classList.add("your-css-class");
// myDiv.classList.remove("your-css-class");



toggleTheme()


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  // document.getElementById("name").textContent = "GGGG"; 
}else{
  //LIGHT
console.log("Device is using a light theme.");
// document.body.style.backgroundColor = "white";
// document.getElementById("name").textContent = "GG"; 
// document.getElementsByClassName("changed").style.color = "black";
}


// Use the result as needed
if (isMobile) {
  console.log("mobile")

  toggleTheme()
  // Check if the device prefers light color scheme




    // console.log("The user is using a mobile device.");
} else {
  // Get the screen width and height
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;

  // Check if the screen resolution is 1920x1080
  if (screenWidth === 1920 && screenHeight === 1080) {
      document.body.style.zoom = "125%";
      console.log("Screen resolution is 1920x1080");
  } else {
      console.log("Screen resolution is not 1920x1080");
  }
  
    console.log("The user is not using a mobile device.");
}


function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");

}

// THIS TO SHOW/HIDE STUFF



// hide everything first
$('#target2').hide();

function smartToggle(target) {


  // MOBILE VERSION
if (isMobile) {
  var buttonsDiv = document.getElementById("buttons");
  buttonsDiv.classList.toggle("hidden")
  document.getElementById(id).toggle(400);
    // console.log("The user is using a mobile device.");
} else {
  // PC VERSION
  console.log("DIV ID: " +target );
  // document.getElementById(target).classList.toggle(400);
  for (let i = 0; i < 5; i++) {
    targetNumber = target[target.length - 1];
    if (targetNumber!=i) {
      $("#target"+i).hide(200);
    }
  }
  $("#"+target).toggle(400);
  
  
  // $('#CARDS_CLASS').toggle(400);
  
    // console.log("The user is not using a mobile device.");
}

}


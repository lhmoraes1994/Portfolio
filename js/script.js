particlesJS.load('particles-container', 'js/particles-js/particlesjs-config.json');
const quotes = [
  "Code hard or go home.",
  "Debugging is like being a detective in a crime movie.",
  "Programming is my superpower.",
  "Coding is my cardio.",
  "Never stop learning, never stop growing.",
  "Software engineering is the art of turning coffee into code.",
  "Code until you drop... or succeed.",
  "Programmers never die, they just go offline.",
  "A clean code is a sign of a sick mind.",
  "Code every day, keep coding away."
];

function showMessage(){

const quote = quotes[Math.floor(Math.random() * quotes.length)];
const message = document.querySelector('.message');
message.innerText = quote;

}



$(document).ready(function() {
  // Get all sections
  $('#home-link').addClass('active');
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
          items:2
        },
        992:{
            items:4
        }
    }
    })
    showMessage();
  

});


var scrollTimer = -1;
function bodyScroll() {
  var icons= document.getElementById("social-icons");
  icons.style.opacity=0.2;

  var sections = $('.section');
  
    // Get all navigation links
    var navLinks = $('nav a');

  // Get current scroll position
  var scrollPos = $(this).scrollTop();

  // Iterate through sections and compare scroll position with section offset
  sections.each(function() {
    var currentSection = $(this);
    var sectionTop = currentSection.offset().top;

    if (scrollPos >= sectionTop && scrollPos < (sectionTop + currentSection.height())) {
      // Get id of current section
      var id = currentSection.attr('id');

      // Remove active class from all navigation links
      if(id!="section-navbar"){
        navLinks.removeClass('active');
     
        // Add active class to navigation link corresponding to current section
        $('nav a[href="#' + id + '"]').addClass('active');
      }

    }
  });


  if (scrollTimer != -1)
    clearTimeout(scrollTimer);

  scrollTimer = window.setTimeout("scrollFinished()", 400);
}

function scrollFinished() {
  var icons= document.getElementById("social-icons");
  icons.style.opacity=1;
}

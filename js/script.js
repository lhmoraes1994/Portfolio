$(document).ready(function() {
  // Get all sections
  $('#home-link').addClass('active');

});


var scrollTimer = -1;
function bodyScroll() {

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

}

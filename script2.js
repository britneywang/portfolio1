// ------------------------ ABOUT ME ------------------------------------
// to view video at slower speed
let vid = document.getElementById('myVideo');
vid.playbackRate = 0.9;

// to view skills, exp, edu
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // to display underline
    event.currentTarget.classList.add("active-link");

    // to display content under each tabname
    document.getElementById(tabname).classList.add("active-tab");
}
// ------------------------------------------------------------------------
// to animate arrow
document.querySelector('.ri-arrow-down-wide-line').addEventListener('click', function() {
    document.getElementById('project-left').scrollIntoView({ behavior: 'smooth' });
});
// to add fade effect
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.header'); // Replace '.header' with the class name of your header
    header.classList.toggle('scrolled', window.scrollY > 0);
});

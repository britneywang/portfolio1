const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 130);

});
// ------------ MENU ------------
document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.menulist a');

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the offset from the top of the page
                var offsetTop = targetElement.offsetTop;

                // Smooth scroll to the target element
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Optional: Add 'active' class to the clicked menu item
                menuLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
});

let vid = document.getElementById('myVideo');
vid.playbackRate = 0.9;

// var video = document.getElementById('water');

//     function toggleMute() {
//       video.muted = !video.muted;
//     }


// ------------ ABOUT ME ------------
// 1. to view skills, exp, edu
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
// ------------ end of about ------------

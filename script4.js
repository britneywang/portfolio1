// Get the current date
const currentDate = new Date();

// Format the date as MM/DD/YY
const options = { month: '2-digit', day: '2-digit', year: '2-digit' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Insert the formatted date into the <p> element with ID 'lastUpdated'
document.getElementById('lastUpdated').textContent += formattedDate;




// Add this to your script4.js or in the <script> tag at the bottom of the HTML
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section'); // Select all sections
  
    function checkSectionVisibility() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
          // The section is in the viewport, add the fade-in class
          section.classList.add('fade-in');
        } else {
          // The section is not in the viewport, remove the fade-in class (optional)
          section.classList.remove('fade-in');
        }
      });
    }
  
    // Run the function when the page is loaded and on scroll
    checkSectionVisibility();
    window.addEventListener('scroll', checkSectionVisibility);
  });

// ---
// Get the video element for Feature #1
const video1 = document.getElementById('my-video');

// Create an IntersectionObserver to track when video1 enters the viewport
const observer1 = new IntersectionObserver((entries, observer1) => {
  entries.forEach(entry => {
    // If the video is in the viewport (i.e., "entry.isIntersecting" is true)
    if (entry.isIntersecting) {
      video1.play(); // Start playing the video
      observer1.unobserve(entry.target); // Stop observing after the video starts
    }
  });
}, {
  threshold: 0.5 // 50% of the video must be visible to start autoplay
});

// Start observing the video element
observer1.observe(video1);


// Get the video element for Feature #2
const video2 = document.getElementById('my-video2');

// Create an IntersectionObserver to track when video2 enters the viewport
const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach(entry => {
    // If the video is in the viewport (i.e., "entry.isIntersecting" is true)
    if (entry.isIntersecting) {
      video2.play(); // Start playing the video
      observer2.unobserve(entry.target); // Stop observing after the video starts
    }
  });
}, {
  threshold: 0.5 // 50% of the video must be visible to start autoplay
});

// Start observing the video element
observer2.observe(video2);


// Get the video element for Feature #3
const video3 = document.getElementById('my-video3');

// Create an IntersectionObserver to track when video3 enters the viewport
const observer3 = new IntersectionObserver((entries, observer3) => {
  entries.forEach(entry => {
    // If the video is in the viewport (i.e., "entry.isIntersecting" is true)
    if (entry.isIntersecting) {
      video3.play(); // Start playing the video
      observer3.unobserve(entry.target); // Stop observing after the video starts
    }
  });
}, {
  threshold: 0.5 // 50% of the video must be visible to start autoplay
});

// Start observing the video element
observer3.observe(video3);






/// --
// Select all the section and links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidenav a');

// Function to detect which section is in view and add/remove the active class
function checkSectionInView() {
    let index = sections.length;

    // Loop through the sections and find the currently visible section
    while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

    // Remove the 'active' class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.style.fontSize = '18px'; // Reset font size when inactive
    });

    // Add 'active' class to the link of the currently visible section
    const activeLink = navLinks[index];
    activeLink.classList.add('active');
    activeLink.style.fontSize = '24px'; // Apply the larger font size for active section
}

// Listen for scroll events
window.addEventListener('scroll', checkSectionInView);

// Initial check to set the active class based on the initial section in view
document.addEventListener('DOMContentLoaded', checkSectionInView);

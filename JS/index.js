
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Remove 'active-link' class from all links
        navLinks.forEach(function(link) {
          link.classList.remove('active-link');
        });

        // Add 'active-link' class to the clicked link
        this.classList.add('active-link');
      });
    });
  });








   /* SCROLL TO TOP START */

    // Function to scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide button when scrolling
window.addEventListener('scroll', function () {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
        scrollBtn.classList.add('show'); // Show button
    } else {
        scrollBtn.classList.remove('show'); // Hide button
    }
});


   /* SCROLL TO TOP END */




/* DESKTOP HEADER SHADOW START*/
    document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');

    // Listen for the scroll event
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {  // Add shadow if scroll > 10px
            navbar.classList.add('scrolled');  // Add shadow class
        } else {
            navbar.classList.remove('scrolled');  // Remove shadow class
        }
    });
});

/* DESKTOP HEADER SHADOW END*/








/* MOBILE MENU START */

    document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menuToggle");
    let closeMenu = document.getElementById("closeMenu");
    let mobileMenu = document.getElementById("mobileMenu");

    // Open menu
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    // Close menu with slide-out effect
    closeMenu.addEventListener("click", function () {
        closeMobileMenu();
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        mobileMenu.classList.add("closing");
        setTimeout(() => {
            mobileMenu.classList.remove("active", "closing");
        }, 300); // Ensure timeout matches transition duration
    }
});

 /* MOBILE MENU END */



/* MOBILE ACTIVE STATES */

document.addEventListener("DOMContentLoaded", function () {
        // Select desktop nav items
        const desktopNavItems = document.querySelectorAll('.navbar .nav-item');
        
        // Select mobile menu nav items
        const mobileNavItems = document.querySelectorAll('.mobile-menu a');
        
        // Function to handle active states
        function setActiveState(navItems, targetItem) {
            navItems.forEach(item => item.classList.remove('active'));
            targetItem.classList.add('active');
        }

        // Desktop navigation active state handling
        desktopNavItems.forEach(item => {
            item.addEventListener('click', function () {
                setActiveState(desktopNavItems, item);
            });
        });

        // Mobile navigation active state handling
        mobileNavItems.forEach(item => {
            item.addEventListener('click', function () {
                setActiveState(mobileNavItems, item);
            });
        });
    });


/* MOBILE ACTIVE STATES END */





/*!!!! ABOUT PAGE START !!!!*/

/*  LOGO CAROUSEL */
var myCarousel = new bootstrap.Carousel(document.querySelector('#moreInfoCarousel'), {
    interval: 3000,
    ride: 'carousel'
});





/*   MORE INFO   */

/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */

document.addEventListener("DOMContentLoaded", function () {
    const images = ["img/about/les1.png", "img/about/les2.png", "img/about/les3.png", "img/about/les4.png", "img/about/les5.png"]; // Add more images if needed
    let currentIndex = 0;
    const imgElement = document.getElementById("changingImage");
    
    setInterval(() => {
        imgElement.classList.add("blur-transition");
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imgElement.src = images[currentIndex];
            imgElement.classList.remove("blur-transition");
        }, 1000);
    }, 3000);
});document.addEventListener("DOMContentLoaded", function () {
    const images = ["img/about/les1.png", "img/about/les2.png", "img/about/les3.png", "img/about/les4.png", "img/about/les5.png"]; // Add more images if needed
    let currentIndex = 0;
    const imgElement = document.getElementById("changingImage");
    
    setInterval(() => {
        imgElement.classList.add("blur-transition");
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imgElement.src = images[currentIndex];
            imgElement.classList.remove("blur-transition");
        }, 1000);
    }, 3000);
});


/*!!!! ABOUT PAGE END !!!!*/
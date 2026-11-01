/* =================================
   MARWA APOLOGY PAGE
   Smooth reveal animations
================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Select the sections and cards
    const elements = document.querySelectorAll(
        ".section, .wish-card, .final-section, .footer"
    );

    // Add the reveal class to every element
    elements.forEach(element => {
        element.classList.add("reveal-on-scroll");
    });

    // Check if the browser supports IntersectionObserver
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Stop observing after the element appears
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });

        // Observe all elements
        elements.forEach(element => {
            observer.observe(element);
        });

    } else {

        // Fallback for older browsers
        elements.forEach(element => {
            element.classList.add("visible");
        });

    }

    // Smooth scrolling for the page
    document.documentElement.style.scrollBehavior = "smooth";

});

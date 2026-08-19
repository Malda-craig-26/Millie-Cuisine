// ===============================
// MOBILE NAVIGATION
// ===============================

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        // Change menu icon between bars and X
        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    // Close mobile menu when a navigation link is clicked
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollTopBtn.style.display = "block";

        } else {

            scrollTopBtn.style.display = "none";

        }

    });


    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");


if (
    galleryImages.length &&
    lightbox &&
    lightboxImage &&
    lightboxClose
) {

    galleryImages.forEach((image) => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

        });

    });


    // Close using the X button
    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });


    // Close by clicking outside the image
    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });


    // Close lightbox with Escape key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });

}
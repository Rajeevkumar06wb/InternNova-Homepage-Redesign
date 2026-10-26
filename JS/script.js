// ===============================
// FAQ ACCORDION
// ===============================

const faqButtons = document.querySelectorAll(".faq-item button");

faqButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const faqItem = button.parentElement;
        const answer = faqItem.querySelector(".faq-answer");
        const icon = button.querySelector("span");

        const isOpen = faqItem.classList.contains("active");

        // Close all FAQ items
        document.querySelectorAll(".faq-item").forEach((item) => {

            item.classList.remove("active");

            const itemAnswer = item.querySelector(".faq-answer");
            const itemIcon = item.querySelector("button span");

            itemAnswer.style.display = "none";
            itemIcon.textContent = "+";

        });

        // Open selected FAQ
        if (!isOpen) {

            faqItem.classList.add("active");

            answer.style.display = "block";

            icon.textContent = "−";

        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(
    ".about-card, .program-card, .domain-card, .feature, .testimonial, .workshop-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});
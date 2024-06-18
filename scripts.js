// Typing effect
const typingText = document.getElementById('typing-text');
const words = ['Developer', 'Designer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50; // Typing speed in milliseconds
const deletingSpeed = 200; // Deleting speed in milliseconds
const delayBetweenWords = 3000; // Delay between words in milliseconds

function type() {
    const currentWord = words[wordIndex];
    let displayText = '';

    if (isDeleting) {
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    typingText.textContent = displayText;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords); // Pause before starting to delete
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(type, typingSpeed);
    } else {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }
}

// Start typing effect
type();


function type() {
    const currentWord = words[wordIndex];
    typingText.textContent = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }

    setTimeout(type, isDeleting ? 100 : 200);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('#about p, #about .btn-primary, #about .img-fluid');

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('#contact .contact-form, #contact .contact-details');

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggle-button');
    const navbarCollapse = document.getElementById('navbarNav');
    const closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', () => {
        navbarCollapse.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        navbarCollapse.classList.remove('active');
    });

    // Close navbar when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarCollapse.classList.remove('active');
        });
    });
});



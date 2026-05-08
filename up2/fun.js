window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });

// Not sure If I'll use this yet

const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
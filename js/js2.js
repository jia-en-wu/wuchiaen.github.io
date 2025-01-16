document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = event.target.getAttribute('href');
            document.querySelector('.content').classList.add('fade-out');
            setTimeout(() => {
                window.location.href = target;
            }, 500); // duration of fade-out
        });
    });

    const skillSection = document.getElementById('skill');
    const skillBars = document.querySelectorAll('.skill-bar div');

    window.addEventListener('scroll', function() {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.5;

        if (sectionPos < screenPos) {
            skillBars.forEach((bar, index) => {
                const width = bar.getAttribute('data-width');
                bar.firstElementChild.style.width = width;
            });
        }
    });

    // Handle contact icon click
    const contactIcon = document.getElementById('contact-icon');
    contactIcon.addEventListener('click', function() {
        $('#contactModal').modal('show');
    });
});

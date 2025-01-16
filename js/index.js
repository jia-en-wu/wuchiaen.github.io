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



    // 小人
    const character1 = document.getElementById('character1');
    const character2 = document.getElementById('character2');
    const character3 = document.getElementById('character3');
    const character4 = document.getElementById('character4');
    const character5 = document.getElementById('character5');
    const character6 = document.getElementById('character6');

    // 監聽
    document.addEventListener('mousemove', function(event) {
        // 获取鼠标位置
        const mouseX = event.pageX;
        const mouseY = event.pageY;

        // 获取小人物位置
        const rect1 = character1.getBoundingClientRect();
        const rect2 = character2.getBoundingClientRect();
        const rect3 = character3.getBoundingClientRect();
        const rect4 = character4.getBoundingClientRect();
        const rect5 = character5.getBoundingClientRect();
        const rect6 = character6.getBoundingClientRect();
        const character1X = rect1.left + rect1.width / 2;
        const character1Y = rect1.top + rect1.height / 2;
        const character2X = rect2.left + rect2.width / 2;
        const character2Y = rect2.top + rect2.height / 2;
        const character3X = rect3.left + rect3.width / 2;
        const character3Y = rect3.top + rect3.height / 2;
        const character4X = rect4.left + rect4.width / 2;
        const character4Y = rect4.top + rect4.height / 2;
        const character5X = rect5.left + rect5.width / 2;
        const character5Y = rect5.top + rect5.height / 2;
        const character6X = rect6.left + rect6.width / 2;
        const character6Y = rect6.top + rect6.height / 2;

        // 计算小人物与鼠标之间的角度
        const angle1 = Math.atan2(mouseY - character1Y, mouseX - character1X);
        const angle2 = Math.atan2(mouseY - character2Y, mouseX - character2X);
        const angle3 = Math.atan2(mouseY - character3Y, mouseX - character3X);
        const angle4 = Math.atan2(mouseY - character4Y, mouseX - character4X);
        const angle5 = Math.atan2(mouseY - character5Y, mouseX - character5X);
        const angle6 = Math.atan2(mouseY - character6Y, mouseX - character6X);

        // 设置小人物的朝向
        character1.style.transform = `rotate(${angle1}rad)`;
        character2.style.transform = `rotate(${angle2}rad)`;
        character3.style.transform = `rotate(${angle3}rad)`;
        character4.style.transform = `rotate(${angle4}rad)`;
        character5.style.transform = `rotate(${angle5}rad)`;
        character6.style.transform = `rotate(${angle6}rad)`;
    });

    
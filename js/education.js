document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.timeline .container');
    
    function revealContainer(index) {
        if (index < containers.length) {
            containers[index].classList.add('visible');
            setTimeout(() => revealContainer(index + 1), 600); // 延遲600毫秒以實現依次顯示效果
        }
    }
    
    revealContainer(0);
});

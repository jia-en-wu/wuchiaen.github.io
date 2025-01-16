document.addEventListener('DOMContentLoaded', function() {
    const artworkImages = document.querySelectorAll('.artwork-gallery img');
    let currentIndex = 0;

    function showImage(index) {
        artworkImages.forEach((image, i) => {
            if (i === index) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % artworkImages.length;
        showImage(currentIndex);
    }

    document.getElementById('artwork-image').addEventListener('click', nextImage);
});

const carousel = document.querySelector('.carousel');
const imageWidth = carousel.firstElementChild.clientWidth + 10; // Width of each image plus margin
let currentIndex = 0;
const lastIndex = carousel.children.length - 3; // Last index to display three images

function showNextImages() {
  currentIndex += 1; // Move to the next index to show three more images
  if (currentIndex > lastIndex) {
    currentIndex = 0; // Reset to the beginning if reached the end
    setTimeout(() => {
      const offset = -currentIndex * imageWidth * 3; // Multiply by 3 to show 3 images at once
      carousel.style.transition = 'none'; // Disable transition to prevent animation when resetting position
      carousel.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        carousel.style.transition = ''; // Re-enable transition
      }, 50); // Restore transition after a brief delay
    }, 6000); // Wait for 5 seconds before resetting
  } else {
    const offset = -currentIndex * imageWidth / 2; // Multiply by 3 to show 3 images at once
    carousel.style.transform = `translateX(${offset}px)`;
  }
}

setInterval(showNextImages, 6000); 
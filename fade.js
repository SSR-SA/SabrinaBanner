// Function to fade out the current image
const fadeOutCurrentImage = () => {
  const currentImage = document.querySelector(".carousel-img:not(.fade-out)");
  if (currentImage) {
    currentImage.classList.add("fade-out");
    setTimeout(() => {
      currentImage.classList.remove("fade-out");
    }, 500); // Adjust the time (in milliseconds) based on your transition duration
  }
};

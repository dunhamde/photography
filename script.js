const gallery = document.getElementById("gallery");
const slides = document.querySelectorAll(".gallery-slide");

gallery.addEventListener("mouseover", () => {
  slides.forEach((element) => {
    element.style.animationPlayState = "paused";
  });
});

gallery.addEventListener("mouseout", () => {
  slides.forEach((element) => {
    element.style.animationPlayState = "running";
  });
});

import { firebaseConfig } from "./config.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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

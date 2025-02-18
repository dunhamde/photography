// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuE4t1wOhQZOWRz3uVz6Cz_iWXYyMcoUM",
  authDomain: "fotochic-photography.firebaseapp.com",
  projectId: "fotochic-photography",
  storageBucket: "fotochic-photography.firebasestorage.app",
  messagingSenderId: "687827402370",
  appId: "1:687827402370:web:76c493807e82a496bfbe9b",
  measurementId: "G-QNZ2C1SS7L"
};

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

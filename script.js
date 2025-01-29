const prev = document.getElementById("prev");
console.log(prev);
const next = document.getElementById("next");
const list = document.getElementById("items");
const itemWidth = 500;

prev.addEventListener("click", () => {
  list.scrollLeft -= itemWidth;
});
next.addEventListener("click", () => {
  list.scrollLeft += itemWidth;
});

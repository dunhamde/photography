const prev = document.getElementById("prev");
const next = document.getElementById("next");
const list = document.getElementById("items");
const itemWidth = 500;
let count = 0;

prev.addEventListener("click", () => {
  list.scrollLeft -= itemWidth;
});
next.addEventListener("click", () => {
  list.scrollLeft += itemWidth;

  count++;
  if (count === 5) {
    count = 1;
  }
  const removeFirstItem = document.getElementById(`box${count}`);
  const clone = removeFirstItem.cloneNode(true);
  removeFirstItem.remove();
  list.appendChild(clone);
});

// when the user clicks, remove and image from the front, add a new one to the back

// setInterval(() => {
//   list.scrollLeft += itemWidth;
//   count++;
//   if (count === 5) {
//     count = 1;
//   }
//   const removeFirstItem = document.getElementById(`box${count}`);
//   const clone = removeFirstItem.cloneNode(true);
//   removeFirstItem.remove();
//   list.appendChild(clone);
// }, 1000);

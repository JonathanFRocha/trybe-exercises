const socket = window.io();
const icon = document.querySelector("#currentLikes");
const stars = document.querySelector("#currentStars");
const likeButton = document.querySelector("#likeIcon");
const starButton = document.querySelector("#starIcon");

likeButton.addEventListener("click", (e) => {
  socket.emit("update", icon.innerHTML);
  return false;
});

socket.on("update", (amount) => {
  const currentAmount = parseInt(amount) + 1;
  icon.innerHTML = currentAmount;
});

starButton.addEventListener("click", (e) => {
  socket.emit("updateStars", stars.innerHTML);
  return false;
});

socket.on("updateStars", (amount) => {
  const currentAmount = parseInt(amount) + 1;
  stars.innerHTML = currentAmount;
});

const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0); // Set current page
  elBook.querySelectorAll(".page").forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      if (evt.target.closest("a")) return;
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", curr);
    });
  });
};

function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = "❤️";
  heart.classList.add('heart');
  document.body.appendChild(heart);
  
  const size = Math.random() * 20 + 10;
  heart.style.fontSize = `${size}px`;
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.top = '-20px';
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  
  setTimeout(() => {
      heart.remove();
  }, 5000);
}

setInterval(createHeart, 200);
document.querySelectorAll(".book").forEach(flipBook);

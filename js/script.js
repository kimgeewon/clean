const wrap = document.querySelector(".bubble-wrap");
const bubbleImg = "images/bubble.png"; // 배경 제거된 물방울 이미지
// const bubbleImg = "bubble-2.png"
window.addEventListener("scroll", () => {
  createBubble();
});

function createBubble() {
  const bubble = document.createElement("img");
  bubble.src = bubbleImg;
  bubble.className = "bubble";

  const size = Math.random() * 40 + 20;
  const left = Math.random() * 100;

  bubble.style.width = size + "px";
  bubble.style.left = left + "%";
  bubble.style.setProperty("--scale", Math.random() * 0.5 + 0.7);
  bubble.style.animationDuration = Math.random() * 6 + 6 + "s";

  wrap.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 12000);
}
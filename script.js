const length = 5;
const segments = [];
const positions = [];
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.classList.add("segment");
  document.body.appendChild(div);
  segments.push(div);
  positions.push({ x: 0, y: 0 });
}

function snake() {
  positions[0].x += (mouseX - positions[0].x) * 0.2;
  positions[0].y += (mouseY - positions[0].y) * 0.2;

  const spacing = 12;

  for (let i = 1; i < length; i++) {
    const dx = positions[i - 1].x - positions[i].x;
    const dy = positions[i - 1].y - positions[i].y;
  
    const angle = Math.atan2(dy, dx);
  
    positions[i].x = positions[i - 1].x - Math.cos(angle) * spacing;
    positions[i].y = positions[i - 1].y - Math.sin(angle) * spacing;
  }

  for (let i = 0; i < length; i++) {
    segments[i].style.left = positions[i].x + "px";
    segments[i].style.top = positions[i].y + "px";
  }

  requestAnimationFrame(snake);
}

snake();

function hc() {
  window.open('https://hackclub.com').focus();
}
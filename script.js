const mario = document.getElementById("mario");
const goomba = document.getElementById("goomba");
const score = document.getElementById("score");
const norrisJoke = document.getElementById("gameover");

let mySound = new Audio("sound/mariojump.mp3");

let myMusic = new Audio("sound/theme.mp3");

function jump() {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}
document.addEventListener("click", function (event) {
  if (!mario.classList.contains("jump")) {
    jump();
    mySound.play();
    myMusic.play();
  }
});

setInterval(() => {
  score.innerText++;
  const marioTop = parseInt(
    window.getComputedStyle(mario).getPropertyValue("top")
  );
  const goombaLeft = parseInt(
    window.getComputedStyle(goomba).getPropertyValue("left")
  );

  if (goombaLeft < 0) {
    goomba.style.display = "none";
  } else {
    goomba.style.display = "";
  }

  if (goombaLeft < 50 && goombaLeft > 0 && marioTop > 10) {
    alert(`Game Over, you run ${score.innerText} meters `);
    location.reload();
  }
}, 50);
function watch() {
  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let day = today.getDate();
  let month = today.getMonth();
  month++;
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById("timer").innerHTML = `
    Time ${hour}:${minutes}:${seconds}`;
  setTimeout(watch, 1000);
}

function checkTime(i) {
  // to add a zero in front of minutes and seconds
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
watch();

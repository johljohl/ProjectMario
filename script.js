const mario = document.getElementById("mario");
const goomba = document.getElementById("goomba");
const score = document.getElementById("score");
const gameOver = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

let mySound = new Audio("sound/mariojump.mp3");

let myMusic = new Audio("sound/theme.mp3");

function jump() {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 1000);
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
    myMusic.pause();
    gameOver.classList.remove("hidden");
    finalScore.innerText = `You ran ${score.innerText} meters`;
  } else {
    setTimeout(() => {
      score.innerText++;
    }, 50);
  }
}, 50);

restartBtn.addEventListener("click", function () {
  location.reload();
});
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

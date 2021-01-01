var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var spanMax = document.getElementById("max");
var reset = document.getElementById("reset");
var input = document.querySelector("input");

var maxScore = parseInt(spanMax.innerHTML);
var p1score = 0;
var p2score = 0;
var winner;

p1.addEventListener("click", function () {
  scoreChanger("p1");
//  func();
});

p2.addEventListener("click", function () {
  scoreChanger("p2");
 // func();
});

reset.addEventListener("click", function () {
  resetFunc();
 // func();
});

input.addEventListener("change", function () {
  if (p1score > 0 || p2score > 0) {
    resetFunc();
   // func();
  }

  if (input.value > 0) {
    spanMax.innerHTML = Number(this.value);
    maxScore = Number(this.value);
  } else {
    spanMax.innerHTML = 5;
    this.value = 5;
  }
});

function resetFunc() {
  p1score = 0;
  p2score = 0;
  span1.innerHTML = 0;
  span2.innerHTML = 0;

  if (winner === "p1") {
    span1.classList.remove("winner");
  } else if (winner === "p2") {
    span2.classList.remove("winner");
  }
}

function scoreChanger(player) {
  if (player === "p1") {
    if (p1score < maxScore && p2score < maxScore) {
      p1score++;
      span1.innerHTML = p1score;

      if (p1score == maxScore) {
        winner = "p1";
        span1.classList.add("winner");
      }
    }
  }

  if (player === "p2") {
    if (p1score < maxScore && p2score < maxScore) {
      p2score++;
      span2.innerHTML = p2score;

      if (p2score == maxScore) {
        winner = "p2";
        span2.classList.add("winner");
      }
    }
  }
}

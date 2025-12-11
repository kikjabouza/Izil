// QUIZ
let answers = { q1: null, q2: null };

function answer(id, val) {
  answers[`q${id}`] = val;
  updateScore();
}

function updateScore() {
  let score = 0;
  if (answers.q1) score++;
  if (answers.q2) score++;

  document.getElementById("score").textContent = `Score : ${score} / 2`;
}

// MODE CALME
const toggle = document.getElementById("calmToggle");
let calm = true;

toggle.addEventListener("click", () => {
  calm = !calm;

  if (calm) {
    document.documentElement.style.setProperty("--accent", "#6BC6C6");
    toggle.textContent = "Mode calme 🧘‍♂️";
  } else {
    document.documentElement.style.setProperty("--accent", "#A98CF5");
    toggle.textContent = "Mode normal";
  }
});

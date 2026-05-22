let xp = 0;
let current = null;

function getDifficulty() {

  // após 150 o jogador escolhe
  if (xp >= 150) {
    return difficultySelect.value;
  }

  // automático
  if (xp >= 100) {
    return "hard";
  }

  if (xp >= 50) {
    return "medium";
  }

  return "easy";
}

function getType() {

  // jogador sempre escolhe
  return typeSelect.value;
}

function unlocks() {

  // desbloqueia seletor de dificuldade
  if (xp === 150) {

    feedback.innerText =
      "🚀 Escolha de dificuldade desbloqueada!";

    feedback.className = "correct";

    difficultySelect.style.display = "block";
  }
}

function loadQuestion() {

  current = generateQuestion(
    getDifficulty(),
    getType()
  );

  question.innerText = current.text;

  answer.value = "";
}

function updateProgress() {

  let nextUnlock;

  if (xp < 50) {
    nextUnlock = 50;
  }

  else if (xp < 100) {
    nextUnlock = 100;
  }

  else if (xp < 150) {
    nextUnlock = 150;
  }

  else {

    nextUnlock =
      Math.ceil(xp / 250) * 250;

    if (xp === nextUnlock) {
      nextUnlock += 250;
    }
  }

  document.getElementById("xp").innerText =
    `XP: ${xp}`;

  document.getElementById("goal").innerText =
    `Próxima meta: ${nextUnlock} XP`;

  let previous;

  if (nextUnlock === 50) {
    previous = 0;
  }

  else if (nextUnlock === 100) {
    previous = 50;
  }

  else if (nextUnlock === 150) {
    previous = 100;
  }

  else {
    previous = nextUnlock - 250;
  }

  let percent =
    ((xp - previous) / (nextUnlock - previous)) * 100;

  if (percent > 100) {
    percent = 100;
  }

  document.getElementById("progress").style.width =
    percent + "%";
}

function checkAnswer() {

  if (Number(answer.value) === current.answer) {

    xp += 10;

    feedback.innerText = "✔ Correto!";
    feedback.className = "correct";

    unlocks();

  } else {

    feedback.innerText =
      `✖ Errado! Resposta: ${current.answer}`;

    feedback.className = "wrong";
  }

  updateProgress();

  setTimeout(loadQuestion, 700);
}

function resetXP() {

  xp = 0;

  feedback.innerText = "XP resetado";

  // esconde seletor de dificuldade
  difficultySelect.style.display = "none";

  updateProgress();

  loadQuestion();
}

answer.addEventListener("keydown", e => {

  if (e.key === "Enter") {
    checkAnswer();
  }
});

// tipo sempre aparece
typeSelect.style.display = "block";

// dificuldade começa escondida
difficultySelect.style.display = "none";

updateProgress();
loadQuestion();
let xp = 0;
let current = null;

function loadQuestion() {
current = generateQuestion(difficultySelect.value, typeSelect.value);
question.innerText = current.text;
answer.value = "";
}

function checkAnswer() {
if (Number(answer.value) === current.answer) {
xp += 10;
feedback.innerText = "✔ Correto!";
feedback.className = "correct";
} else {
feedback.innerText = "✖ Errado";
feedback.className = "wrong";
}
document.getElementById("xp").innerText = "XP: " + xp;
setTimeout(loadQuestion, 700);
}

function resetXP() {
xp = 0;
document.getElementById("xp").innerText = "XP: 0";
feedback.innerText = "XP resetado";
}

difficultySelect.onchange = loadQuestion;
typeSelect.onchange = loadQuestion;
answer.addEventListener("keydown", e => { if (e.key === "Enter") checkAnswer(); });

loadQuestion();
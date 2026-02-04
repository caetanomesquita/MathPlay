let xp = 0;
let currentQuestion = null;

function loadQuestion() {
const level = document.getElementById("difficultySelect").value;
currentQuestion = generateQuestion(level);

const q = document.getElementById("question");
q.className = "fade";
q.innerText = currentQuestion.text;

document.getElementById("answer").value = "";
}

function checkAnswer() {
const value = Number(document.getElementById("answer").value);
const feedback = document.getElementById("feedback");

if (value === currentQuestion.answer) {
xp += 10;
feedback.className = "correct";
feedback.innerText = "✔ Correto!";
} else {
feedback.className = "wrong";
feedback.innerText = "✖ Errado";
}

document.getElementById("xp").innerText = "XP: " + xp;
setTimeout(loadQuestion, 600);
}

function resetXP() {
xp = 0;
document.getElementById("xp").innerText = "XP: 0";
document.getElementById("feedback").innerText = "🔄 XP resetado";
loadQuestion();
}

document.getElementById("difficultySelect").addEventListener("change", loadQuestion);
document.getElementById("answer").addEventListener("keydown", e => {
if (e.key === "Enter" && e.target.value !== "") checkAnswer();
});

loadQuestion();
function rand(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstDegree(level) {
let x = rand(1, level === 'easy' ? 5 : level === 'medium' ? 10 : 15);
let a = rand(1, level === 'hard' ? 5 : 3);
let b = rand(-10, 10);
return { text: `${a}x ${b>=0?'+':''}${b} = ${a*x + b}`, answer: x };
}

function secondDegree(level) {
let x = rand(-5, level === 'hard' ? 10 : 5);
let a = rand(1, level === 'hard' ? 5 : 3);
let b = rand(-10, 10);
let c = -a * x * x - b * x;
return { text: `${a}x² ${b>=0?'+':''}${b}x ${c>=0?'+':''}${c} = 0`, answer: x };
}

function generateQuestion(level, type) {
if (type === "first") return firstDegree(level);
if (type === "second") return secondDegree(level);
const types = ["first", "second"];
return generateQuestion(level, types[rand(0, 1)]);
}
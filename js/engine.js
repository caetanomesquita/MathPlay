function rand(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstDegree(level) {
let limit = level === 'easy' ? 5 : level === 'medium' ? 10 : 15;
let x = rand(1, limit);
let a = rand(1, level === 'hard' ? 5 : 3);
let b = rand(-10, 10);
return {
  text: `${a}x ${b>=0?'+':''}${b} = ${a*x + b}`,
  answer: x
};
}

function secondDegree(level) {
let range = level === 'hard' ? 10 : 5;
let x1, x2;

do {
  x1 = rand(-range, range);
  x2 = rand(-range, range);
} while (x1 === x2);

let a = rand(1, level === 'hard' ? 5 : 3);
let b = -a * (x1 + x2);
let c = a * x1 * x2;

const askMin = Math.random() < 0.5;

return {
  text: `${a}x² ${b>=0?'+':''}${b}x ${c>=0?'+':''}${c} = 0
Informe a ${askMin ? 'menor' : 'maior'} raiz`,
  answer: askMin ? Math.min(x1, x2) : Math.max(x1, x2)
};
}

function generateQuestion(level, type) {
if (type === 'first') return firstDegree(level);
if (type === 'second') return secondDegree(level);
const types = ['first', 'second'];
return generateQuestion(level, types[rand(0, 1)]);
}
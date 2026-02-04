
function generateQuestion(level) {
    let a, b, c, question, answer;

    if (level === "easy") {
        // x² = k
        answer = Math.floor(Math.random() * 6) + 1;
        question = `x² = ${answer * answer}`;
    }

    if (level === "medium") {
        // x² + bx = 0
        answer = Math.floor(Math.random() * 6) + 1;
        b = -answer * 2;
        question = `x² ${b >= 0 ? "+" : ""}${b}x = 0`;
    }

    if (level === "hard") {
        // ax² + bx + c = 0
        answer = Math.floor(Math.random() * 5) + 1;
        a = 1;
        b = -2 * answer;
        c = answer * answer;
        question = `x² ${b >= 0 ? "+" : ""}${b}x + ${c} = 0`;
    }

    return { text: question, answer };
}

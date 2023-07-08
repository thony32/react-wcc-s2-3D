export function getQuestion() {
    const min = 2;
    const max = 10;
    const answer = Math.floor(Math.random() * (max - min + 1) + min);
    return { answer, choices: [1, 2, 3, 4] };
}
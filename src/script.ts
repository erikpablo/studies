//Type para funções

type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
    return console.log(n1 + n2);
}
const subt: MathFunction = (n1, n2) => {
    return console.log(n1 - n2);
}
const mult: MathFunction = (n1, n2) => {
    return console.log(n1 * n2);
}
const div: MathFunction = (n1, n2) => {
    return console.log(n1 / n2);
}


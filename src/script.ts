let number1 = document.querySelector(".number1") as HTMLInputElement;
let number2 = document.querySelector(".number2") as HTMLInputElement;
let button = document.querySelector(".sum");
let result = document.querySelector(".result");

function calculation(n1: number, n2: number) {
    return n1 + n2;
};

button.addEventListener('click', () => {
    result.innerHTML = calculation(+number1.value, +number2.value).toString();
});
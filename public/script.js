var number1 = document.querySelector(".number1");
var number2 = document.querySelector(".number2");
var button = document.querySelector(".sum");
var result = document.querySelector(".result");
function calculation(n1, n2) {
    return n1 + n2;
}
;
button.addEventListener('click', function () {
    result.innerHTML = calculation(+number1.value, +number2.value).toString();
});

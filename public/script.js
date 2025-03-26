// Usando types nos parâmetros de uma função
function firstLetterUpperCase(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}
firstLetterUpperCase('erik');

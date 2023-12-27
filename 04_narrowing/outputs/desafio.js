"use strict";
function review(nota) {
    if (!nota)
        return "Review sem nota";
    switch (nota) {
        case 1:
            return "Nota 1, que pena.";
        case 2:
            return "Nota 2, que pena, vamos melhorar.";
        case 3:
            return "Nota 3, valeu, ainda temos muito a melhorar.";
        case 4:
            return "Nota 4, que bom, mas ainda podemos melhorar.";
        case 5:
            return "Nota 5, que maravilha.";
        default:
            return "Nota invalida;";
    }
}
console.log(review(1));
console.log(review(2));
console.log(review(3));
console.log(review(4));
console.log(review(5));
console.log(review(false));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somaNum = exports.n10 = exports.n9 = exports.n8 = exports.n7 = exports.n6 = exports.n5 = exports.n4 = exports.n3 = exports.n2 = exports.n1 = void 0;
exports.n1 = 1;
exports.n2 = 2;
exports.n3 = 3;
exports.n4 = 4;
exports.n5 = 5;
exports.n6 = 6;
exports.n7 = 7;
exports.n8 = 8;
exports.n9 = 9;
exports.n10 = 10;
function somaNum(...valores) {
    return valores.reduce((item, total) => item + total);
}
exports.somaNum = somaNum;

'use strict';

let a = 2;
//Сначала выполняется операция в круглых скобках (a = a * 2) т.к. a == 2 то значение в скобках становится равно 4, далее к 1 прибавляется 4 и значение записывается в переменную x (x == 5).
let x = 1 + (a *= 2);

alert(x);
alert(a);
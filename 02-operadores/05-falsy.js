let nombre = 'chanchito';
let username = nombre || 'anonimo';
console.log(username);

function fn1(){
    console.log('func 1');
    return true;
}
function fn2(){
    console.log('func 2');
    return false;
}
let x = fn1() && fn2();
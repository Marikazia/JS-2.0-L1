console.log('Hello Alexander!');
console.log("Mariana");
console.log(07);
console.log('Добро' + ' ' + 'пожаловать' + ' ' + 'на курс'); 
// alert('2019');
console.log('2019' - '200');

document.getElementById('six').innerHTML = 'Hello World';
document.getElementById('seven').innerHTML = '12' * '12';

document.querySelector('.out-8').innerHTML = 'task-8';
document.querySelector('.out-9').innerHTML = 'world';
document.querySelector('.out-10').innerHTML = '<h2>Hi</h2>';
document.querySelector('.out-11').innerHTML += '456';


// let b; // var a - устарело
// let a = document.querySelector('.out-12').innerHTML = '3.1415';
let a = document.querySelector('.out-12');
a.innerHTML = '3.1415';

let out13 = document.querySelector('.out-13');
out13.innerHTML = '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">';

let z1 = 6;
let z2 = 3;
z = z1 * z2;
let out14 = document.querySelector('.out-14');
out14.innerHTML = z;

let y1 = 6;
let y2 = 3;
y = y1 / y2;
let out15 = document.querySelector('.out-15');
out15.innerHTML = y;

let x1 = 'Hello';
let x2 = 5;
x = x1 + x2;
let out16 = document.querySelector('.out-16');
out16.innerHTML = x;

let out17 = document.querySelector('.out-17');
console.log(out17);

let out18 = document.querySelector('.out-18');
console.log(out18);
out18 = 5;
console.log(out18);

let out19 = document.querySelector('.out-19');
console.log(out19);
out19 = document.querySelector('.out-19-test');
console.log(out19);

let out20 = document.querySelector('.out-20');
// document.querySelector('.out-10').innerHTML = '<h2>Hi</h2>';
document.querySelector('.out-20').textContent  = '<h2>Hi</h2>';


// console.log('Hello' + ' world'); // конкатенация
// console.log('Hello ' + 'world'); // конкатенация
// console.log('Hello' + ' ' + 'world'); // конкатенация
// console.info('Hello');
// alert('Hello');
// alert('Hello'); // ctrl+l
// alert('Hello');

// document.getElementById('out').innerHTML = 'Hello';
// document.getElementById('out').innerHTML = 2019;
// document.getElementById('out').innerHTML = '<b>2020</b>';

// document.querySelector('.header').innerHTML = 15;
// document.querySelector('#one').innerHTML = 777; // есть #
// document.getElementById('one').innerHTML = 888; // нет #

// let b; // var a - устарело
// let a = document.querySelector('#one'); // внутрь a получил параграф
// let c;
// c = document.querySelector('.header');

// a.innerHTML = 9999; // new! - ошибка 
// c.innerHTML = 6666;
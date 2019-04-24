/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.querySelector('.informatie');
var hidden = document.querySelector('.hidden');

button.addEventListener('click', function () {
    hidden.classList.toggle('hidden');
});

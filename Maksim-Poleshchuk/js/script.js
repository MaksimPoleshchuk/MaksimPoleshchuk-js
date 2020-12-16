import modalControl from './modal.js';

const modal = modalControl();

let $wrap = document.querySelectorAll('.tab');

function toggler(selector, id, modify){
	let $elem = document.querySelectorAll(selector);
  for(let $el of $elem){
  	$el.classList.remove(modify);
  }
  $elem[id].classList.add(modify);
}

for(let i = 0; i < $wrap.length; i++){
	$wrap[i].addEventListener('click', function(event){
  	event.preventDefault();
  	toggler('.content', i, 'active');
    toggler('.tab', i, 'active');
  })
}

let event = event.preventDefault();

let $table = document.querySelector('.table');
let $open = document.querySelector('.add-user');
let $close = document.querySelectorAll('.close');
let $ok = document.querySelector('.ok');


$ok.addEventListener('click', function () {

	let str = '';
	for (let el of data) {
		str += `<tr><td> ${el.firstName}</td><td>${el.lastName}</td><td>${el.age}</td><td>${el.gender}</td><td>${el.work}</td></tr>`;
	}
	$table.innerHTML = str;
	modal.toggle('close');
});


$open.addEventListener('click', function () {
	modal.toggle('open');
});

for (let $btn of $close) {
	$btn.addEventListener('click', function () {
		modal.toggle('close');
	});
}


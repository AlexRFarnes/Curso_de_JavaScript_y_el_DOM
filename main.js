document.addEventListener('DOMContentLoaded', e => {
  const title = document.getElementById('title');
  title.innerText = 'Cursos';

  const description = document.getElementById('description');
  description.textContent = 'Listado de cursos';
});

// const items = document.getElementsByClassName('list-group-item');
const items = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  element.style.background = '#eee';
}

// const firstItem = document.querySelector('li');
// console.log(firstItem);

// const list = document.querySelector('ul');
// console.log(list.children);

// for (let i = 0; i < list.children.length; i++) {
//   // console.log(list.children[i]);
// }

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// parent
// const element = document.querySelector('li');
// // console.log(element.parentElement);

// // sibling
// // console.log(element.nextElementSibling);
// // console.log(element.nextElementSibling.nextElementSibling);

// const lastElement = document.querySelector('#last-course');
// // console.log(lastElement.previousElementSibling);

// // nodes
// console.log(element.childElementCount); // only count HTML tags
// console.log(element.childNodes);

// // attributes
// console.log(description.innerHTML);

// event listeners
// const btn = document.querySelector('.btn');
// // btn.addEventListener('click', e => {
// //   console.log(e.target);
// // });

// addGlobalListener('click', btn);

// function addGlobalListener(eventType, element) {
//   document.addEventListener(eventType, e => {
//     if (e.target != element) return;
//     console.log(element);
//   });
// }

// btn.addEventListener('mouseenter', function (e) {
//   this.className = 'btn btn-danger';
// });

// btn.addEventListener('mouseout', function (e) {
//   this.className = 'btn btn-primary';
// });

// setTimeout(
//   (p1, p2, p3) => {
//     console.log(p1, p2, p3);
//   },
//   3000,
//   'argumento 1',
//   'argumento 2',
//   'argumento 3'
// );

// const input = document.getElementById('input');
// input.addEventListener('keydown', e => {
//   console.log(`Tecla presionada: ${e.key}`);
// });

const form = document.getElementById('course-form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const title = document.getElementById('title-form').value;
  const description = document.getElementById('description-form').value;

  console.log(title, description);
});

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', e => {
  console.log('cmabio de valor');
});

const title_form = document.getElementById('title-form');

title_form.addEventListener('change', e => {
  console.log('cmabio de valor');
});

const element = document.querySelector('li');
const list = document.querySelector('ul');
const div_row = document.querySelector('.row');
const div_container = document.querySelector('.container');
const body = document.body;

element.addEventListener('click', show_message);

list.addEventListener('click', show_message);

div_row.addEventListener('click', show_message);

div_container.addEventListener('click', show_message);

body.addEventListener('click', show_message);

function show_message(e) {
  e.stopPropagation();
  console.log('Target: ' + e.target.tagName);
  console.log('Current element: ' + this.tagName);
}

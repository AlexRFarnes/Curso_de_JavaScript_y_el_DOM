const title = document.getElementById('title');
title.innerText = 'Cursos';

const description = document.getElementById('description');
description.textContent = 'Listado de cursos';

// const items = document.getElementsByClassName('list-group-item');
const items = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  element.style.background = '#eee';
}

const firstItem = document.querySelector('li');
// console.log(firstItem);

const list = document.querySelector('ul');
// console.log(list.children);

for (let i = 0; i < list.children.length; i++) {
  // console.log(list.children[i]);
}

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// parent
const element = document.querySelector('li');
// console.log(element.parentElement);

// sibling
// console.log(element.nextElementSibling);
// console.log(element.nextElementSibling.nextElementSibling);

const lastElement = document.querySelector('#last-course');
// console.log(lastElement.previousElementSibling);

// nodes
console.log(element.childElementCount); // only count HTML tags
console.log(element.childNodes);

// attributes
console.log(description.innerHTML);

// event listeners
const btn = document.querySelector('.btn');
// btn.addEventListener('click', e => {
//   console.log(e.target);
// });

addGlobalListener('click', btn);

function addGlobalListener(eventType, element) {
  document.addEventListener(eventType, e => {
    if (e.target != element) return;
    console.log(element);
  });
}

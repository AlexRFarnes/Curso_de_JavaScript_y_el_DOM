const title = document.getElementById('title');
title.innerText = 'Cursos';

const description = document.getElementById('description');
description.innerText = 'Listado de cursos';

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
  console.log(list.children[i]);
}

console.log(list.firstElementChild);
console.log(list.lastElementChild);

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

// // const firstItem = document.querySelector('li');
// // console.log(firstItem);

// // const list = document.querySelector('ul');
// // console.log(list.children);

// // for (let i = 0; i < list.children.length; i++) {
// //   // console.log(list.children[i]);
// // }

// // console.log(list.firstElementChild);
// // console.log(list.lastElementChild);

// // parent
// // const element = document.querySelector('li');
// // // console.log(element.parentElement);

// // // sibling
// // // console.log(element.nextElementSibling);
// // // console.log(element.nextElementSibling.nextElementSibling);

// // const lastElement = document.querySelector('#last-course');
// // // console.log(lastElement.previousElementSibling);

// // // nodes
// // console.log(element.childElementCount); // only count HTML tags
// // console.log(element.childNodes);

// // // attributes
// // console.log(description.innerHTML);

// // event listeners
// // const btn = document.querySelector('.btn');
// // // btn.addEventListener('click', e => {
// // //   console.log(e.target);
// // // });

// // addGlobalListener('click', btn);

// // function addGlobalListener(eventType, element) {
// //   document.addEventListener(eventType, e => {
// //     if (e.target != element) return;
// //     console.log(element);
// //   });
// // }

// // btn.addEventListener('mouseenter', function (e) {
// //   this.className = 'btn btn-danger';
// // });

// // btn.addEventListener('mouseout', function (e) {
// //   this.className = 'btn btn-primary';
// // });

// // setTimeout(
// //   (p1, p2, p3) => {
// //     console.log(p1, p2, p3);
// //   },
// //   3000,
// //   'argumento 1',
// //   'argumento 2',
// //   'argumento 3'
// // );

// // const input = document.getElementById('input');
// // input.addEventListener('keydown', e => {
// //   console.log(`Tecla presionada: ${e.key}`);
// // });

// const form = document.getElementById('course-form');
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const title = document.getElementById('title-form').value;
//   const description = document.getElementById('description-form').value;

//   console.log(title, description);
// });

// const checkbox = document.getElementById('checkbox');
// checkbox.addEventListener('change', e => {
//   console.log('cmabio de valor');
// });

// const title_form = document.getElementById('title-form');

// title_form.addEventListener('change', e => {
//   console.log('cmabio de valor');
// });

// const element = document.querySelector('li');
// const list = document.querySelector('ul');
// const div_row = document.querySelector('.row');
// const div_container = document.querySelector('.container');
// const body = document.body;

// element.addEventListener('click', show_message);

// list.addEventListener('click', show_message);

// div_row.addEventListener('click', show_message);

// div_container.addEventListener('click', show_message);

// body.addEventListener('click', show_message);

// function show_message(e) {
//   e.stopPropagation();
//   console.log('Target: ' + e.target.tagName);
//   console.log('Current element: ' + this.tagName);
// }

function createCardWithInnerHTML(title, description) {
  const html = `<div class="col-sm-6 col-md-4">
                  <div class="thumbnail">
                    <div class="caption">
                      <h3 id="title-card">${title}</h3>
                      <p id="description-card">${description}</p>
                      <p>
                        <a href="" class="btn btn-danger">Accion</a>
                      </p>
                    </div>
                  </div>
                </div>`;

  row.innerHTML += html;
}

function createCard(title, description) {
  let cardWrapper = document.createElement('div');
  cardWrapper.id = 'card-wrapper';
  cardWrapper.className = 'col-sm-6 col-md-4';

  let thumbnail = document.createElement('div');
  thumbnail.className = 'thumbnail';

  let caption = document.createElement('div');
  caption.className = 'caption';

  let cardTitle = document.createElement('h3');
  cardTitle.textContent = title;

  let cardDescription = document.createElement('p');
  cardDescription.textContent = description;

  let ctaWrapper = document.createElement('p');
  let btn = document.createElement('a');
  btn.href = '#';
  btn.className = 'btn btn-danger';
  btn.textContent = 'Eliminar';

  ctaWrapper.addEventListener('click', deleteCard);

  ctaWrapper.appendChild(btn);

  caption.appendChild(cardTitle);
  caption.appendChild(cardDescription);
  caption.appendChild(ctaWrapper);

  thumbnail.appendChild(caption);

  cardWrapper.appendChild(thumbnail);

  row.appendChild(cardWrapper);
}

function deleteCard(e) {
  e.target.closest('#card-wrapper').remove();
}

const row = document.querySelector('.row');

const form = document.getElementById('course-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const titleElement = document.getElementById('title-form');
  const descriptionElement = document.getElementById('description-form');

  createCard(titleElement.value, descriptionElement.value);
  titleElement.value = '';
  descriptionElement.value = '';
});

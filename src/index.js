import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import img from './assets/bmw.png';
import { col, row } from './utils';

const site = document.querySelector('#site');

const model = [
  {
    type: 'title',
    value: 'Простой конструктор на чистом JavaScript',
    options: {
      tag: 'h1',
      styles: {
        color: 'red',
        'background-color': 'green',
        padding: '10px',
      },
    },
  },
  {
    type: 'text',
    value: 'Это текст который ни о чем не говорит',
    options: {
      styles: {
        color: 'red',
        'background-color': 'green',
        padding: '10px',
      },
    },
  },
  {
    type: 'columns',
    value: [
      'Первая колонка с контентом',
      ' Вторая колонка с контентом',
      'Третья колонка с контентом',
      'Четвертая колонка с текстом',
    ],
    options: {
      styles: {
        color: 'green',
        padding: '10px',
      },
    },
  },
  {
    type: 'image',
    value: img,
    options: {
      styles: {
        color: 'red',
        'background-color': 'green',
        padding: '10px',
      },
      imageStyles: {
        width: '500px',
        margin: 'auto',
      },
      alt: 'Это картинка',
    },
  },
];

model.forEach((block) => {
  let html = '';

  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'columns') {
    html = columns(block);
  } else if (block.type === 'image') {
    html = image(block);
  }

  site.insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return row(col(`<h1>${block.value}</h1>`));
}
function text(block) {
  return row(col(` <p>${block.value}</p>`));
}

function columns(block) {
  let html = block.value.map((item) => col(`<p>${item}</p>`)).join('');
  return row(`${html}`);
}
function image(block) {
  return row(col(`<img src="${block.value}" >`));
}

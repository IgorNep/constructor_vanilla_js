import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import image from './assets/bmw.png';

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
    value: image,
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
    html = `
    <div class="row">
        <div class="col">
            <h1>${block.value}</h1>
        </div>
    </div>    
`;
  } else if (block.type === 'text') {
    html = `
    <div class="row">
        <div class="col">
            <p>${block.value}</p>
        </div>
    </div>    
`;
  } else if (block.type === 'columns') {
    html = `
    <div class="row">
        <div class="col">
            <p>Это текст который ни о чем не говорит</p>
        </div>
        <div class="col">
            <p>Это текст который ни о чем не говорит</p>
        </div>
        <div class="col">
            <p>Это текст который ни о чем не говорит</p>
        </div>
    </div>
`;
  } else if (block.type === 'image') {
    html = `
    <div class="row">
        <div class="col">
        <img src="${block.value}" >
        </div>
    </div>    
`;
  }

  site.insertAdjacentHTML('beforeend', html);
});

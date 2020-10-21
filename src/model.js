import img from './assets/bmw.png';
import {
  TitleBlock,
  TextBlock,
  ImageBlock,
  ColumnsBlock,
} from './classes/Block';
export const model = [
  new TitleBlock('Простой конструктор на чистом JavaScript', {
    tag: 'h1',
    styles: {
      color: 'red',
      'background-color': 'green',
      padding: '10px',
    },
  }),
  new TextBlock('Это текст который ни о чем не говорит', {
    styles: {
      color: 'blue',
      'background-color': 'yellow',
      padding: '10px',
    },
  }),
  new ColumnsBlock(
    [
      'Первая колонка с контентом',
      ' Вторая колонка с контентом',
      'Третья колонка с контентом',
      'Четвертая колонка с текстом',
    ],
    {
      styles: {
        color: 'green',
        padding: '10px',
      },
    }
  ),
  new ImageBlock(img, {
    styles: {
      color: 'red',
      'background-color': 'green',
      padding: '10px',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Это BMW',
  }),
];

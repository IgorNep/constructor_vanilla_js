import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { model } from './model';

const site = document.querySelector('#site');

model.forEach((block) => {
  site.insertAdjacentHTML('beforeend', block.toHTML());
});

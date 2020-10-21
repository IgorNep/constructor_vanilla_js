import { block } from '../utils';
import { TextBlock, TitleBlock } from './Block';
import { model } from '../model';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.element = document.querySelector(selector);
    this.updateCallback = updateCallback;
    this.element.addEventListener('submit', this.add.bind(this));
    this.init();
  }
  init() {
    this.element.insertAdjacentHTML('afterbegin', this.template);
  }
  get template() {
    return [block('text'), block('title')].join('');
  }
  add(e) {
    e.preventDefault();

    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    const newBlock =
      type === 'text'
        ? new TextBlock(value, { styles })
        : new TitleBlock(value, { styles });
    console.log(newBlock);
    this.updateCallback(newBlock);
    this.addToLocalStorage(newBlock);
    e.target.value.value = '';
    e.target.styles.value = '';
  }
  addToLocalStorage(newBlock) {
    let model;
    if (localStorage.getItem('model') === null) {
      model = [];
    } else {
      model = JSON.parse(localStorage.getItem('model'));
    }
    model.push(newBlock);
    localStorage.setItem('model', JSON.stringify(model));
  }
}

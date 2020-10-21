import { row, col, css } from '../utils';
class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw error('Метод toHTML должен быть реализован');
  }
}
export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    return row(col(`<h1>${this.value}</h1>`), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    return row(col(` <p>${this.value}</p>`), css(styles));
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    let html = this.value.map(col).join('');
    return row(`${html}`, css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, imageStyles, alt } = this.options;
    return row(
      col(
        `<img src="${this.value}" style="${css(imageStyles)}" alt="${alt}" >`
      ),
      css(styles)
    );
  }
}

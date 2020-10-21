export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}
export function css(styles = {}) {
  let toString = (key) => `${key}:${styles[key]}`;
  let arr = Object.keys(styles).map(toString).join(';');
  return arr;
}

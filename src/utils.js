export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}
export function css(styles = {}) {
  if (typeof styles !== 'string') {
    let toString = (key) => `${key}:${styles[key]}`;
    let arr = Object.keys(styles).map(toString).join(';');
    return arr;
  }
  return styles;
}
export function block(type) {
  return `<form>
          <h5>${type}</h5>
                          <div class="form-group">
                              <input type="text" class="form-control form-control-sm" placeholder="value" name="value"/>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control form-control-sm" placeholder="styles" name="styles"/>
                          </div>
              <input type="submit" value="Добавить" class="btn btn-sm btn-primary"/>
                       </form>
                       <hr />`;
}

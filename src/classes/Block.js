class Block {
  constructor(title, value, options) {
    this.title = title;
    this.value = value;
    this.options = options;
  }
}
class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
}

class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
}
class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
}

class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
}

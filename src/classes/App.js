import { Site } from '../classes/Site';
import { Sidebar } from '../classes/Sidebar';

export class App {
  constructor(model) {
    this.model = model;
    this.init();
  }
  init() {
    const site = new Site('#site');
    const updateModel = (contact) => {
      this.model.push(contact);
      site.render(this.model);
    };
    new Sidebar('#panel', updateModel);
    site.render(this.model);
  }
}

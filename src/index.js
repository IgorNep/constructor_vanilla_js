import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './classes/Sidebar';
import { Site } from './classes/Site';
import './main.css';
import { model } from './model';

const site = new Site('#site');
const updateModel = (contact) => {
  model.push(contact);
  site.render(model);
};
new Sidebar('#panel', updateModel);
site.render(model);

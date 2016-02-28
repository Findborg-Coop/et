import app from '../../app';
import ElementsLayout from './catalog-home.vue';


app.add('elements', {
  path: '/et/elements',
  parent: 'root',
  component: ElementsLayout
});



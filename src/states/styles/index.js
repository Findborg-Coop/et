import app from '../../app';
import StylesLayout from './styles-layout.vue';
import StylesHome from './styles-home.vue';
import Stylesheadings from './styles-headings.vue';
import StylesBasiclists from './styles-basic-lists.vue';
import StylesParagraphs from './styles-paragraphs.vue';


app.add('styles', {
 redirect: 'styles-home',
  component: StylesLayout
});

app.add('styles-home', {
  path: '/et/elements/styles',
  parent: 'styles',
  component: StylesHome
});

app.add('headings', {
  path: '/et/elements/styles/headings',
  parent: 'styles',
  component: Stylesheadings
});

app.add('basic-lists', {
  path: '/et/elements/styles/lists',
  parent: 'styles',
  component: StylesBasiclists
});

app.add('paragraphs', {
  path: '/et/elements/styles/lists',
  parent: 'styles',
  component: StylesParagraphs
});
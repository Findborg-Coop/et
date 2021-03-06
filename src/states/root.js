import app from '../app';

import Layout from './layout.vue';
import Home from './home.vue';
import A from './a.vue';
import B from './b.vue';

app.add('layout', {
  redirect: 'home',
  component: Layout
});

app.add('home', {
  path: '/et',
  parent: 'layout',
  component: Home
});

app.add('a', {
  path: '/et/a',
  parent: 'layout',
  component: A
});

app.add('b', {
  path: '/et/b',
  parent: 'layout',
  component: B
});
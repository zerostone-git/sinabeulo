import './styles/global.scss';
import './styles/github-markdown.css';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App';
import DocButton from './docs/Button';
import DocComponents from './docs/Components';
import DocIntroduction from './docs/Introduction';

const history = createWebHashHistory();
const routes = [
  { path: '/', component: DocIntroduction },
  { path: '/components', component: DocComponents },
  { path: '/components/button', component: DocButton },
];

const router = createRouter({
  history,
  routes,
});

const container = document.createElement('div');
document.body.appendChild(container);

const app = createApp(App);
app.use(router);
app.mount(container);

import { createApp } from 'vue';

const container = document.createElement('div');
document.body.appendChild(container);

const app = createApp(<div>Vue Docs</div>);
app.mount(container);

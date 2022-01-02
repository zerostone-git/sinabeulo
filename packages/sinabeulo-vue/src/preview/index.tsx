import { createApp } from 'vue';

const container = document.createElement('div');
document.body.appendChild(container);

const app = createApp(<div>Vue Preview</div>);
app.mount(container);

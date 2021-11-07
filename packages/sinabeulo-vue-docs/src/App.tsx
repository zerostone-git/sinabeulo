import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const App = defineComponent({
  render() {
    return (
      <div class="wrap">
        <div class="head">
          <h1>sinabeulo-vue</h1>
        </div>
        <div class="headShadow" />
        <div class="side">
          <ul>
            <li>
              <RouterLink to="/">Introduction</RouterLink>
            </li>
            <li>
              <RouterLink to="/components">Components</RouterLink>
              <ul>
                <li>
                  <RouterLink to="/components/button">Button</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="main markdown-body">
          <RouterView />
        </div>
      </div>
    );
  },
});

export default App;

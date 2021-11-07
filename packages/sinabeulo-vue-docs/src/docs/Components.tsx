import { RouterLink } from 'vue-router';

const Components = (): JSX.Element => (
  <ul>
    <li>
      <RouterLink to="/components/button">Button</RouterLink>
    </li>
  </ul>
);
Components.displayName = 'Components';

export default Components;

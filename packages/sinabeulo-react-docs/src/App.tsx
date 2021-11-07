import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import DocButton from './docs/Button.mdx';
import DocComponents from './docs/Components.mdx';
import DocIntroduction from './docs/Introduction.mdx';

function App(): JSX.Element {
  return (
    <div className="wrap">
      <div className="head">
        <h1>sinabeulo-react</h1>
      </div>
      <div className="headShadow" />
      <div className="side">
        <ul>
          <li>
            <NavLink to="/" exact>
              Introduction
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" exact>
              Components
            </NavLink>
            <ul>
              <li>
                <NavLink to="/components/button" exact>
                  Button
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main markdown-body">
        <Switch>
          <Route path="/" exact>
            <DocIntroduction />
          </Route>
          <Route path="/components" exact>
            <DocComponents />
          </Route>
          <Route path="/components/button" exact>
            <DocButton />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

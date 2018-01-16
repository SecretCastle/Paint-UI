import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import styles from './index.css';

import Application from './routes/application';


const App = () => (
  <div className="comp_main_container">
    <header>
      <Link to="/application">应用</Link>
      <Link to="/product">产品</Link>
    </header>
    <section>
      <Route path="/application" component={Application} />

    </section>
  </div>
)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('app')
)
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './index.less';
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
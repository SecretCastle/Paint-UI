import React, { PureComponent } from 'react'
import { Route, Link } from 'react-router-dom';

import './index.css';
import AppSetting from './components/appsetting';


class Application extends PureComponent {
  render () {
    const { match } = this.props;
    return (
      <div className="container">
        <header className="innerHeader">
          <Link to={`${match.url}/appsetting`}>产品配置</Link>
        </header>
        <div className="inner-main">
          <Route path={`${match.url}/appsetting`} component={AppSetting} />
        </div>
      </div>
    )
  }
}

export default Application;

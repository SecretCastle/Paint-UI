import React, { PureComponent } from 'react'
import { Route, Link } from 'react-router-dom';

import styles from './index.less';
import AppSetting from './components/appsetting';
import AppHom from './components/rebuild/tab-app-home';
import AppAbout from './components/rebuild/tab-app-about';

class Application extends PureComponent {
  render () {
    const { match } = this.props;
    return (
      <div className={styles.container}>
        <header className={styles.innerHeader}>
          <Link to={`${match.url}/appsetting`}>产品配置</Link>
          <Link to={`${match.url}/apphome`}>主界面</Link>
          <Link to={`${match.url}/appabout`}>关于界面</Link>
        </header>
        <div className={styles.innerMain}>
          <Route path={`${match.url}/appsetting`} component={AppSetting} />
          <Route path={`${match.url}/apphome`} component={AppHom} />
          <Route path={`${match.url}/appabout`} component={AppAbout} />
        </div>
      </div>
    )
  }
}

export default Application;

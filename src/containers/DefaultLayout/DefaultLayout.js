import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { AppBreadcrumb, AppFooter, AppHeader, AppSidebar, AppSidebarNav, AppSidebarMinimizer } from '@coreui/react';
import { PrivateRoute } from '../../Configuration/Router/PrivateRoute';
import Routes from '../../Configuration/Router/Routes';
import Navigation from '../../Configuration/Navbar/Navbar';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <Suspense>
              <AppSidebarNav navConfig={Navigation} {...this.props} />
            </Suspense>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={Routes} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {Routes.map((route, idx) => {
                    if (route.isPrivate) {
                      return <PrivateRoute key={idx} path={route.path} exact={route.exact} name={route.name} component={route.component} />;
                    }
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/users" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;

import Footer from './footer';
import HeadingComponent from './siteHeading/HeadingComponent';
import HomeContainer from './pages/Home';
import Navbar from './navbar';
import React, { Component, Suspense } from 'react';
import styles from '../main.style';
import {theme} from './AppStyles';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import '../assets/fonts/mt4w-icons.svg';

const AppointmentComponent = React.lazy(() => import(/* webpackChunkName: "appointments" */'./pages/Appointments'));
const AboutComponent = React.lazy(() => import(/* webpackChunkName: "about" */'./pages/About'));
// const HomeContainer = React.lazy(() => import(/* webpackChunkName: "home" */'./pages/Home'));
const ServicesContainer = React.lazy(() => import(/* webpackChunkName: "services" */'./pages/Services'));

const Loading = () => (
  <div css={{height: '100vh'}}></div>
);

class App extends Component {
  state = {
    // a value from 0 to 1 representing proportion of window scroll until
    // the navbar styling changes
    scrollPosition: 0,
  }

  componentDidMount = () => {
    let startTransition = 50; // amount of pixels to scroll before the navbar styling changes
    window.addEventListener('scroll', evt => {
      let position = window.scrollY;
      if (position < startTransition) {
        this.setState({scrollPosition: position / startTransition});
      } else if (position >= startTransition && this.state.scrollPosition < 1) {
        this.setState({scrollPosition: 1});
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div>
            <Global styles={styles}/>
            <HeadingComponent position={this.state.scrollPosition} />
            <Navbar position={this.state.scrollPosition} />
            <Switch>
              <Route exact path="/" render={() => (
                <Suspense fallback={<Loading/>}>
                  <HomeContainer/>
                </Suspense>
              )} />
              <Route path="/services" render={() => (
                <Suspense fallback={<Loading/>}>
                  <ServicesContainer/>
                </Suspense>
              )} />
              <Route path="/about" render={() => (
                <Suspense fallback={<Loading/>}>
                  <AboutComponent/>
                </Suspense>
              )} />
              <Route path="/appointments" render={() => (
                <Suspense fallback={<Loading/>}>
                  <AppointmentComponent/>
                </Suspense>
              )}/>
              <Redirect to="/" component={HomeContainer} />
            </Switch>
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);

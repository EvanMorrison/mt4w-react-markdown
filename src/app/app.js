import Footer from './footer';
import HeadingComponent from './siteHeading/HeadingComponent';
import Navbar from './navbar';
import React, { Component, Suspense } from 'react';
import {theme} from './AppStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import '../assets/fonts/mt4w-icons.svg';
import '../main.style';

const AppointmentComponent = React.lazy(() => import(/* webpackChunkName: "appointments" */'./pages/Appointments'));
const AboutComponent = React.lazy(() => import(/* webpackChunkName: "about" */'./pages/About'));
const HomeContainer = React.lazy(() => import(/* webpackChunkName: "home" */'./pages/Home'));
const ServicesContainer = React.lazy(() => import(/* webpackChunkName: "services" */'./pages/Services'));

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
      if(position < startTransition) {
        this.setState({scrollPosition: position / startTransition});
      } else if(position >= startTransition && this.state.scrollPosition < 1) {
        this.setState({scrollPosition: 1});
      }
    });
  }

  render() {
    return(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div>
            <HeadingComponent position={this.state.scrollPosition} />
            <Navbar position={this.state.scrollPosition} />
            <Switch>
              <Route exact path="/" component={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <HomeContainer/>
                </Suspense>
              )} />
              <Route path="/services" component={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <ServicesContainer/>
                </Suspense>
              )} />
              <Route path="/about" render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <AboutComponent/>
                </Suspense>
              )} />
              <Route path="/appointments" render={() => (
                <Suspense fallback={<div>Loading...</div>}>
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

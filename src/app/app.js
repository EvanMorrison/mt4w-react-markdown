import AboutComponent from './pages/About';
import AppointmentComponent from './pages/Appointments';
import Footer from './footer';
import HeadingComponent from './siteHeading/HeadingComponent';
import HomeContainer from './pages/Home';
import Navbar from './navbar';
import React, { Component } from 'react';
import ServicesContainer from './pages/Services';
import {theme} from './AppStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import '../assets/fonts/mt4w-icons.svg';
import '../main.style';
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
              <Route exact path="/" component={HomeContainer} />
              <Route path="/services" component={ServicesContainer} />
              <Route path="/about" component={AboutComponent} />
              <Route path="/appointments" component={AppointmentComponent} />
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

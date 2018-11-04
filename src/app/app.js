import AboutComponent from './Components/About';
import AppointmentComponent from './Components/Appointments';
import Footer from './Components/Footer';
import HeadingComponent from './Components/SiteHeading/HeadingComponent';
import HomeContainer from './Components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import ServicesContainer from './Components/Services';
import {theme} from './AppStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
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
        <MuiThemeProvider >
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
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);

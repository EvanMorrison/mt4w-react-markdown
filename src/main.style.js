/* stylelint-disable */
import { injectGlobal } from 'emotion';
import { rgba } from 'polished';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:900,700,500,400,300,100');
  @import url('https://fonts.googleapis.com/css?family=Philosopher|Montserrat:100,300,600');
  @import url('https://fonts.googleapis.com/css?family=Material+Icons');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 15px;
  }

  nav {
    text-decoration: none;
    color: inherit;
  }

  div a:not([href^="mailto"]) {
    text-decoration: none;
    color: inherit;
  }

  .active {
    border-bottom: 1px solid ${rgba('steelblue', 0.7)};
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
  font-weight: 400;
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.woff2) format('woff2'),
    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.woff) format('woff'),
    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.ttf) format('truetype');
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'Material Icons' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    font-size: 24px;
    color: ${rgba('#000000', 0.87)};
    
    /* Enable Ligatures ================ */
    letter-spacing: 0;
    -webkit-font-feature-settings: 'liga';
    -moz-font-feature-settings: 'liga=1';
    -moz-font-feature-settings: 'liga';
    -ms-font-feature-settings: 'liga' 1;
    font-feature-settings: 'liga';
    -webkit-font-variant-ligatures: discretionary-ligatures;
    font-variant-ligatures: discretionary-ligatures;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

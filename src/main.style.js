/* stylelint-disable */
import { injectGlobal } from 'emotion';

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
    border-bottom: 1px solid rgba(steelblue, 0.7);
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
    color: rgba(#000000, 0.87);
    
    /* Enable Ligatures ================ */
    letter-spacing: 0;
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    font-feature-settings: "liga";
    -webkit-font-variant-ligatures: discretionary-ligatures;
    font-variant-ligatures: discretionary-ligatures;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-twitter-square:before {
    content: "\f081";
  }
  .icon-facebook-square:before {
    content: "\f082";
  }
  .icon-facebook:before {
    content: "\f09a";
  }
  .icon-facebook-f:before {
    content: "\f09a";
  }
  .icon-brand:before {
    content: "\e900";
    color: #3B5998;
  }
  .icon-schedule:before {
    content: "\e8b5";
  }
  .icon-accessibility:before {
    content: "\e84e";
  }
  .icon-account_circle:before {
    content: "\e853";
  }
  .icon-add:before {
    content: "\e145";
  }
  .icon-airline_seat_flat:before {
    content: "\e630";
  }
  .icon-arrow_back:before {
    content: "\e5c4";
  }
  .icon-arrow_forward:before {
    content: "\e5c8";
  }
  .icon-phone:before {
    content: "\e0cd";
  }
  
  .icon-check:before {
    content: "\e5ca";
  }
  .icon-close:before {
    content: "\e5cd";
  }
  .icon-done:before {
    content: "\e876";
  }
  .icon-markunread:before {
    content: "\e159";
  }
  .icon-face:before {
    content: "\e87c";
  }
  .icon-home:before {
    content: "\e88a";
  }
  .icon-info_outline:before {
    content: "\e88f";
  }
  .icon-keyboard_arrow_down:before {
    content: "\e313";
  }
  .icon-keyboard_arrow_left:before {
    content: "\e314";
  }
  .icon-keyboard_arrow_right:before {
    content: "\e315";
  }
  .icon-keyboard_arrow_up:before {
    content: "\e316";
  }
  .icon-local_pharmacy:before {
    content: "\e550";
  }
  .icon-room:before {
    content: "\e8b4";
  }
  .icon-mail_outline:before {
    content: "\e0e1";
  }
  .icon-map:before {
    content: "\e55b";
  }
  .icon-menu:before {
    content: "\e5d2";
  }
  .icon-more_horiz:before {
    content: "\e5d3";
  }
  .icon-more_vert:before {
    content: "\e5d4";
  }
  .icon-near_me:before {
    content: "\e569";
  }
  .icon-pin_drop:before {
    content: "\e55e";
  }
  .icon-remove:before {
    content: "\e15b";
  }
  .icon-send:before {
    content: "\e163";
  }
  .icon-store_mall_directory:before {
    content: "\e563";
  }
  .icon-thumb_up:before {
    content: "\e8dc";
  }
`;

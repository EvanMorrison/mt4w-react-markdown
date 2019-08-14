import styled from '@emotion/styled';

export default styled.div`
  .map-group * {
    font-family: Roboto, sans-serif;
  }

  .map-group .place-card {
    color: #5B5B5B;
    font-size: 12px;
    cursor: default;
  }

  .map-group .place-card.place-card-large {
    padding: 9px 4px 9px 0;
    min-width: 300px;
  }

  .map-group .place-desc-large {
    width: 200px;
    display: inline-block;
  }

  .map-group .place-desc-large .place-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
  }

  .map-group .place-desc-large .address {
    margin-top: 6px;
  }

  .map-group .navigate {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    height: 43px;
    padding: 0 7px;
  }

  .map-group .navigate .navigate-link:visited {
    color: #3A84DF;
  }

  .map-group .navigate .navigate-link .icon {
    font-size: 28px;
    color: #3A84DF;
  }

  .map-group .navigate .navigate-text {
    margin-top: 5px;
    text-align: center;
    font-size: 12px;
    max-width: 55px;
  }

  .map-group .navigate .tooltip-anchor {
    width: 50%;
    display: none;
    position: relative;
    float: right;
    z-index: 1;
  }

  .map-group .navigate .tooltip-anchor .tooltip-tip-inner, .map-group .navigate .tooltip-anchor .tooltip-tip-outer {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    background-color: transparent;
    position: absolute;
    left: -8px;
  }

  .map-group .navigate .tooltip-anchor .tooltip-tip-inner {
    border-bottom: 8px solid white;
    z-index: 1;
    top: 1px;
  }

  .map-group .navigate .tooltip-anchor .tooltip-tip-outer {
    border-bottom: 8px solid #CBCBCB;
  }

  .map-group .navigate .tooltip-anchor .tooltip-content {
    position: absolute;
    top: 8px;
    left: -70px;
    line-height: 137%;
    padding: 10px 12px 10px 13px;
    width: 210px;
    margin: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: white;
  }

  .map-group .bottom-actions {
    padding-top: 15px;
  }

  .map-group .bottom-actions a {
    font-family: Roboto, sans-serif;
  }

  .map-group .bottom-actions a:visited {
    color: #3A84DF;
    text-decoration: none;
  }
`;

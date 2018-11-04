import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import styled from 'react-emotion';
import TextField from 'material-ui/TextField';
import { PropTypes } from 'prop-types';
import { rgba } from 'polished';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  max-width: 38em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
 
  .titlebar {
    width: 100%;
    height: 60px;
    background-color: ${props => rgba(props.theme.primary, 0.7)};
    color: white;
    line-height: 60px;
    padding-left: 30px;
    font-size: 1.2em;
  }
`;

const Input = styled(TextField)`
  margin-left: 30px;
  width: 80% !important;
`;

const Button = styled(RaisedButton)`
  margin: 24px 30px;
  width: 50px;

  button {
    background-color: ${props => rgba(props.theme.primary, 0.7)} !important;
    color: white;

    &[disabled] {
      background-color: ${props => rgba(props.theme.primary, 0.2)} !important;
    }
  }
`;

class EmailForm extends Component {
  render() {
    return(
      <Form onSubmit={this.props.onSubmit}>
        <div className="titlebar">
          Send a message here:
        </div>
        <Input type="text" name="name" floatingLabelText="name"
          value={this.props.message.name}
          onChange={this.props.handleInput}/>
        <Input type="text" name="phone" floatingLabelText="phone"
          value={this.props.message.phone}
          onChange={this.props.handleInput}/>
        <Input type="email" name="email" floatingLabelText="email"
          value={this.props.message.email}
          onChange={this.props.handleInput}
          required={true}/>
        <Input name="message" floatingLabelText="message" multiLine={true} rows={1}
          value={this.props.message.message}
          onChange={this.props.handleInput}/>
        <Button type="submit" disabled={this.props.sending}>
          Send
        </Button>
      </Form>
    );
  }
}

EmailForm.propTypes = {
  onSubmit: PropTypes.func,
  message: PropTypes.object,
  handleInput: PropTypes.func,
  sending: PropTypes.bool
};

export default EmailForm;

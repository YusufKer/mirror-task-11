import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }

  /* The event handler below calls the onTextChange specified in App.js. 
  This event handler is called in response to the onChange event of the 
  <input> element defined in the render() method below. */
  handleChange(e) {
    this.props.onTextChange(e.target.value);
  }

/* Notice in the render() method below, this.props.text (the props passed from App.js)
is used to set the value for the input element. */
  render() {
    return (
      <fieldset>
        <legend>Enter text:</legend>
        <input value={this.props.text}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default Input;
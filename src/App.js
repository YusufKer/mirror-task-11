/* In this code example, App.js acts as the parent container of the two <Input> components. We will use
this parent container to sync the state of the 2 child components. */

import React, { Component } from 'react';
import './App.css';
import Input from './Input1';

class App extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleTxt1Change= this.handleTxt1Change.bind(this);
    this.handleTxt2Change = this.handleTxt2Change.bind(this);
    //In the constructor we initialise the state.
    this.state = {txt: ''};
  }

/*The two event handlers below will be called each time the onTextChange event is triggered.
Within this event handler, this.setState is called. setState() enqueues changes to the component state
and tells React that this component and its children need to be re-rendered with the updated state. 
This is the primary method you use to update the user interface in response to event handlers and server responses.
this.setState will cause the App.js component and its child components to be rendered again. I.e. the render() method
defined below will be called each time setState() is called. */
  handleTxt1Change(text) {
    this.setState({txt: text});
  }

  handleTxt2Change(text) {
    this.setState({txt: text});
  }

/*Within the render method for the App.js component we render 2 child components (<Input>).

Whenever the render method below is called, the props 'text' is passed through to the render()
method defined in the <Input> component class. See Input1.js. */
  render() {
    return (
      <div>
        <Input
        text={this.state.txt}
          onTextChange={this.handleTxt1Change} />
        }

     <Input
     text={this.state.txt}
          onTextChange={this.handleTxt2Change} />

      </div>
    );
  }
  
}

export default App;

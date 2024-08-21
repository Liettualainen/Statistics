import { Feedbackstyle } from "./Feedback.styled";
import React, { Component } from "react";
export class Feedback extends Component {
    static defaultProps = {
        step: 1,
        startpoint: 110,
    };
     state = {
         value: this.props.startpoint,
     }

    constructor(props) {
        super(props);
        // this.state = {
        //       value: this.props.startpoint,
        // }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    }
    
    static propTypes = {};
    handleIncrement = () => {
         this.setState({ value: this.state.value + this.props.step})
     };
    handleDecrement = evt => {
        this.setState({ value: this.state.value - this.props.step })
    };
    render() {
        const { step } = this.props;
      return (<>
              <Feedbackstyle>FEEDBACK</Feedbackstyle>
           <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>Increment by {step}</button>
        <button type="button"onClick={this.handleDecrement}>Decrement by {step}</button>
      </div>
          </>)
    }
}


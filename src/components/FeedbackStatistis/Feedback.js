import { Component } from "react";
import { DivLayout} from "./Feedback.styled";
import { Statistics } from './Statistics.js';
import { FeedbackOptions } from './FeedbackOptions.js';
import {Section} from './Section.js'
export class Feedback extends Component {
    static defaultProps = {
        startpoint: 0,
        begining:  "Make your choice and click the button",
    };
  state = {
    good: this.props.startpoint,
    neutral: this.props.startpoint,
    bad: this.props.startpoint,
  };
  //   onLeaveFeedback = state => {
  //   this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  // };
  onLeaveFeedback = evt => {
      const { name, value } = evt.target;
    this.setState({[name]: Number(value) + 1});        
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (Number(good) + Number(neutral) + Number(bad));
  }; 
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return ((!good) ? 0 : Math.round(Number(good) / (Number(good) + Number(neutral) + Number(bad)) * 100))
  };
  clearCount = () => {
    return this.setState({ good: 0, neutral: 0, bad: 0 });
  }; 

    render() {
      const { good, neutral, bad } = this.state;
      const options = Object.keys(this.state);
      console.log(options);
;      const { begining } = this.props;
      return (
        <DivLayout>
          <Section title="Please leave feedback">
            <FeedbackOptions
          // options={options}
          onbegining={begining}
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section  title="Statistics:">
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onCountTotalFeedback={this.countTotalFeedback()}
            oncountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            onclearCount={this.clearCount} />
            </Section>
    </DivLayout>)
  }
}
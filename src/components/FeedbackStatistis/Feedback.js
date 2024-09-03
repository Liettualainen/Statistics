import { Component } from "react";
import { Feedbackstyle, DivLayout, ClickButton, DivFeedback, Button, StatisticsDiv,NoGFeedBack, StatisticsElem } from "./Feedback.styled";
import { ImageHeader } from '../Layout/Layout.styled';
import  feedback from '../Img/feedback.png'
export class Feedback extends Component {
    static defaultProps = {
        startpoint: 0,
        begining:  "Make your choice and click the button",
    };
  state = {
    good: this.props.startpoint,
    neutral: this.props.startpoint,
    bad: this.props.startpoint,
     }
  onLeaveFeedback = evt => {
      const { name, value } = evt.target;
    this.setState({ [name]: Number(value) + 1} );        
  };
  countTotalFeedback = () => {
    return Number(this.state.good) + Number(this.state.neutral) + Number(this.state.bad) ;
  } 
  countPositiveFeedbackPercentage = () => {
    return (!this.state.good)
      ? 0
      : Math.round(Number(this.state.good)/(Number(this.state.good) + Number(this.state.neutral) + Number(this.state.bad))*100) ;
  }
  clearCount = () => {
    return this.setState({good: 0, neutral:0, bad:0 })  ;
  } 
    render() {
        const { good, neutral, bad} = this.state;
        const { begining } = this.props;
      return (<DivLayout>
        <Feedbackstyle>Please leave feedback</Feedbackstyle>
        <ClickButton>{!good && !neutral && !bad && begining}</ClickButton>
          <DivFeedback>
          <Button green type="button" name="good" value={good} onClick={this.onLeaveFeedback}>GOOD</Button>
          <Button yellow type="button" name="neutral"  value={neutral} onClick={this.onLeaveFeedback}>NEUTRAL</Button>
          <Button red type="button" name="bad"  value={bad} onClick={this.onLeaveFeedback}>BAD</Button>
        </DivFeedback>
        { (!good && !neutral && ! bad)
          ? 
          <><ImageHeader feedback src={feedback} alt="User avatar" width="70" height="70">
            </ImageHeader>
            <NoGFeedBack>No feedback given</NoGFeedBack>
          </>
          : <StatisticsDiv>
          <Feedbackstyle >Statistics</Feedbackstyle>
          <StatisticsElem>Good: {this.state.good}</StatisticsElem>
          <StatisticsElem>Neutral: {this.state.neutral}</StatisticsElem>
          <StatisticsElem>Bad: {this.state.bad}</StatisticsElem> 
            <StatisticsElem >Total: {this.countTotalFeedback()}</StatisticsElem> 
            <StatisticsElem >Positive Feedback: {this.countPositiveFeedbackPercentage()}%</StatisticsElem> 
            <Button red type="button" name="clear" onClick={this.clearCount}>Clear count</Button>
          </StatisticsDiv>
        }
          </DivLayout>)
    }}


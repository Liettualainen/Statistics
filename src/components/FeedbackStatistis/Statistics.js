
import { Button, StatisticsDiv, StatisticsElem } from "./Feedback.styled";
import { Notification } from './Notification.js';

export const Statistics = ({ onGood, onNeutral, onBad, onCountTotalFeedback,
    oncountPositiveFeedbackPercentage, onclearCount }) => (
    <>
        {(!onGood && !onNeutral && !onBad)
            ?
            <Notification/>
            :
            <StatisticsDiv>
                <StatisticsElem>Good: {onGood}</StatisticsElem>
                <StatisticsElem>Neutral: {onNeutral}</StatisticsElem>
                <StatisticsElem>Bad: {onBad}</StatisticsElem>
                <StatisticsElem >Total: {onCountTotalFeedback}</StatisticsElem>
                <StatisticsElem >Positive feedback: {oncountPositiveFeedbackPercentage}%</StatisticsElem>
                <Button red type="button" name="clear" onClick={onclearCount}>Clear count</Button>
            </StatisticsDiv>
        }
    </>
    )
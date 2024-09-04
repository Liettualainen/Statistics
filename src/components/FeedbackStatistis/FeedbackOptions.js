import { DivFeedback, Button, ClickButton} from "./Feedback.styled";

export const FeedbackOptions = ({ options, onGood, onNeutral, onBad,
    onbegining, onLeaveFeedback }) => (
    <>  
    <ClickButton>{!onGood && !onNeutral && !onBad && onbegining}</ClickButton>
        <DivFeedback>
        {/* {options.map(option => (
                   <Button      
                       key={option}
                       type="button"
                       onClick={() => onLeaveFeedback(option)}
                       >
          {option}
        </Button>
      ))} */}
            <Button green type="button" name="good" value={onGood} onClick={onLeaveFeedback}>
                GOOD</Button>
            <Button yellow type="button" name="neutral" value={onNeutral} onClick={onLeaveFeedback}>
                NEUTRAL</Button>
            <Button red type="button" name="bad" value={onBad} onClick={onLeaveFeedback}>
                BAD</Button>
    </DivFeedback>
    </>    
    )

import { DivFeedback, Button} from "./Feedback.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>  
        <DivFeedback>
        {options.map(option => (
            <Button      
                    $primary = {option}
                       key={option}
                       type="button"
                       onClick={() => onLeaveFeedback(option)}
                       >
          {option}
            </Button>
      ))} 
    </DivFeedback>
    </>    
)

    // {/* <ClickButton>{!onGood && !onNeutral && !onBad && onbegining}</ClickButton> */}
    
// export const FeedbackOptions = ({ options, onSize, onGood, onNeutral, onBad,
//     onbegining, onLeaveFeedback }) => (
            // {/* <Button green type="button" name="good" value={onGood} onClick={onLeaveFeedback}>
            //     GOOD</Button>
            // <Button yellow type="button" name="neutral" value={onNeutral} onClick={onLeaveFeedback}>
            //     NEUTRAL</Button>
            // <Button red type="button" name="bad" value={onBad} onClick={onLeaveFeedback}>
            //     BAD</Button> */}
            
            // {/* <Button green $primary={onSize} type="button" name="good" value={onGood} onClick={onLeaveFeedback}>
            //     GOOD</Button>
            // <Button yellow type="button" name="neutral" value={onNeutral} onClick={onLeaveFeedback}>
            //     NEUTRAL</Button>
            // <Button red type="button" name="bad" value={onBad} onClick={onLeaveFeedback}>
            //     BAD</Button> */}
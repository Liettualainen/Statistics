import { NoGFeedBack } from "./Feedback.styled";
import { ImageHeader } from '../Layout/Layout.styled';
import feedback from '../Img/feedback.png';

export const Notification = () => (
    <>
        <NoGFeedBack>No feedback given</NoGFeedBack>
    <ImageHeader feedback src={feedback} alt="User avatar" width="70" height="70">
    </ImageHeader>
    </>
    )

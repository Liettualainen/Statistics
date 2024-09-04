import {  Feedbackstyle} from "./Feedback.styled";

export const Section = ({ title, children }) => {
    return (
    <>
    <Feedbackstyle>{title}</Feedbackstyle>
    {children}
    </>
    )
}
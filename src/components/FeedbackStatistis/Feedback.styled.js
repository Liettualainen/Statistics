import styled from 'styled-components';

export const DivLayout = styled.div`
display: flex;
flex-direction: column;
`
export const Feedbackstyle = styled.span`
margin-right: auto;
font-size: 80px;
margin-bottom: 10px;
`
export const ClickButton = styled.div`
font-size: 20px;
`
export const DivFeedback = styled.div`
margin-top: 0px;
display: flex;
flex-direction: row;
`
export const Button = styled.button`  
// background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  // color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  width: 200px;
  height: 60px;
  line-height: 20px;
  list-style: none;
  margin: 30px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
 background-color: ${(props) => (props.green ? "green" : props.yellow ? "yellow" : "red")};
 color: ${(props) => (props.green ? "white" : props.yellow ? "green" : "yellow")};
`
export const StatisticsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: start;
`
export const NoGFeedBack = styled.span`
color: red;
font-weight: 800;
font-size: 50px;
margin-top: 50px;
margin-bottom: 20px;
`
export const StatisticsElem = styled.span`
font-weight: 400;
font-size: 50px;
margin-top: 20px;
`
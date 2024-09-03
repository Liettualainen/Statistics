import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
padding: 6px;
`
export const Main = styled.div`
margin-left: auto;
margin-right:auto;
margin:0;
padding: 0;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
justify-content: space-around;
   text-align: center;
`

export const ImageHeader = styled.img`
display: block;
margin-right: auto;
margin-left: auto;
width: ${(props) => (props.footer ? "400px" : "800px")};
height: ${(props) => (props.footer ? "100px" : props.feedback ? "800px" : "200px" )};
`
export const Footer = styled.div`
display: flex;
flex-direction: row;
width: 800px;
margin-left: auto;
margin-right:auto;

`
import {Container, Main} from './Layout.styled'

export const Layout = ({ children }) => {
   return (
      < Container>
         <header><h1>HEADER</h1></header>
         <Main>{ children}</Main>
         <footer><h1>FOOTER</h1></footer>
      </ Container>
   )
}



import { Container, Main, Footer, ImageHeader } from './Layout.styled'
import header from '../Img/header.png'
import  footer from '../Img/footer.png'

export const Layout = ({ children }) => {
   return (
      < Container>
         <header><ImageHeader src={header} alt="User avatar" width="70" height="70">
         </ImageHeader></header>

         <Main>{children}</Main>
         
         <Footer><ImageHeader footer src={footer} alt="User avatar" width="70" height="70">
         </ImageHeader><ImageHeader footer src={footer} alt="User avatar" width="70" height="70">
         </ImageHeader></Footer>
      </ Container>
   )}



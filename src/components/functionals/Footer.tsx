import { Container } from "../styled/Container"
import { Paragraph } from "./Paragraph"
import { FooterStyled } from "../styled/FooterStyled"

export const Footer = ()=>{
    return (
        <FooterStyled>
            <Container>
                <Paragraph color="white">©2024 Full Stack Growdev</Paragraph>
                <Paragraph color="white">17ª Edição</Paragraph>
            </Container>
        </FooterStyled>
     
    )
}
import { ReactNode } from "react"
import { Title } from "./Title"
import { Button } from "./Button";
import { CardStyled } from "../styled/CardStyled";

interface CardPlanosProps {
    children: ReactNode;
    cardTitle: string
}

export const CardPlanos = ({children, cardTitle}: CardPlanosProps )=>{
    return (
        <CardStyled addBorder>
            <Title fontSize="2.4rem">{cardTitle}</Title>
            <hr/>
            {children}
            <Button primary>Saiba Mais!</Button>
        </CardStyled>
    )
}
import { ReactNode } from "react"
import { Title } from "./Title"
import { Button } from "./Button";
import { CardStyled } from "../styled/CardStyled";

interface CardServicosProps {
    children: ReactNode;
    title: string
}

export const CardServicos = ({children, title}: CardServicosProps)=>{
    return (
        <CardStyled>
            
            {children}
            <Title fontSize="1.8rem">{title}</Title>
            <Button>Saiba Mais</Button>
         
        </CardStyled>
    )
}
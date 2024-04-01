import { ReactNode } from "react"
import { TitleStyled} from "../styled/TitleStyled"

interface TitleProps{
    children: ReactNode;
    color?: string;
    fontSize?: string;
    tag?: string;
}

export const Title = ({tag , children, color, fontSize}: TitleProps)=>{
    return <TitleStyled as={tag} color={color} fontSize={fontSize}>{children}</TitleStyled>
        
}
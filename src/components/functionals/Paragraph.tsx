import { ReactNode } from "react"
import { ParagraphStyled } from "../styled/ParagraphStyled";

interface ParagraphProps{
    children: ReactNode;
    color?: string;
    fontSize?: string
}

export const Paragraph  = ({children, color, fontSize}: ParagraphProps)=>{
    return <ParagraphStyled  color={color} fontSize={fontSize}>{children}</ParagraphStyled>
}
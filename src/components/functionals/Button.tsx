import { ReactNode } from "react";
import { ButtonStyled } from "../styled/ButtonStyled";

interface ButtonProps{
    children: ReactNode;
    primary?: boolean
}
export const Button = ({children, primary}: ButtonProps)=>{
    return <ButtonStyled primary={primary}>{children}</ButtonStyled>
}
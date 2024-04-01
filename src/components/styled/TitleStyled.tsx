import styled from "styled-components";
interface TitleProps{
    color?: string;
    fontSize?: string
}

export const TitleStyled = styled.h1<TitleProps>`
    color:${({color})=> color ?? "#122a57"} ;
    font-size: ${({fontSize})=> fontSize ?? "1.6rem"};
    font-weight: 600;
`

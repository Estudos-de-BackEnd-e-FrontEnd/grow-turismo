import styled from "styled-components";

interface ParagraphProps{
    color?: string;
    fontSize?: string
}

export const ParagraphStyled = styled.p<ParagraphProps>`
    color: ${({color})=> color ?? "black"};
    font-size: ${({fontSize})=> fontSize ?? "1.4rem"} ;
`
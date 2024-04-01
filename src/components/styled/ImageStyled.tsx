import styled from "styled-components"

interface ImageProps{
    width?: string
    maxWidth?: string
}
export const ImageStyled = styled.img<ImageProps>`
    width: ${({width})=> width ?? "100%"};
    max-width: ${({maxWidth})=> maxWidth ?? "none"};
`

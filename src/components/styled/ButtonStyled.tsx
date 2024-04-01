import {styled} from "styled-components";


interface ButtonProps{
    primary?: boolean
}
export const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${({primary})=> primary ? "rgb(18, 42, 87)" : "transparent"};
    color:  ${({primary})=> primary ? "white" : "rgb(18, 42, 87)"};
    font-weight: 600;
    border-radius: 40px;
    border: 2px solid rgb(18, 42, 87);
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    width: ${({primary})=> primary ? "180px" : "150px"};
    padding: ${({primary})=> primary ? "20px" : "10px"};
    
    &:hover{
        background-color: rgb(75, 95, 135);
        color: rgb(255, 255, 255);
        border: 2px solid rgb(75, 95, 135);
    }
     
`
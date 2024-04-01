import styled from "styled-components";

interface CardStyledProps{
    addBorder?: boolean
}

export const CardStyled = styled.div<CardStyledProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 250px;
    min-height: 300px;
    justify-content: space-around;
    border: ${({addBorder})=> addBorder ?  "3px solid rgb(18, 42, 87)" : "none"};
    li{
        list-style: square;
        font-size: 1.5rem;
    }
    hr{
        width: 100%;
        height: 3px;
        border: none;
        background-color: rgb(18, 42, 87)
    }
` 
  
 
 
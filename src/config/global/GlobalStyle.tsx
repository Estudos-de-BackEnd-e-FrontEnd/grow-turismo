import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 10px;
    }
    
    *{
        margin: 0;
        padding: 0;
        font-family: Montserrat, sans-serif;
        box-sizing: border-box;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
  

    
`
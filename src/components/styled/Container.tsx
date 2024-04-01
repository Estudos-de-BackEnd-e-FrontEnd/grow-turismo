import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 40px;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    main{
        width: 100%;
        display: flex;
        min-height: calc(100vh - 190px);
        justify-content: space-between;
        align-items: center;

        div{
            width: 100%;
            padding: 20px 40px;
        }
    }


 
`
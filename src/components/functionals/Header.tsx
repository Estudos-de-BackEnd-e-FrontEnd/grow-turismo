import {NavLink} from "react-router-dom"
import { Title } from "./Title"
import { HeaderStyled } from "../styled/HeaderStyled"
import { Container } from "../styled/Container"

export const Header = ()=>{
    return (
        <HeaderStyled>
            <Container >
                <Title fontSize="3.2rem" color="white"><NavLink to="/">GrowTravel</NavLink></Title>
                    <nav>
                        <ul>
                            <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
                            <li><NavLink to="/servicos">Serviços</NavLink></li>
                            <li><NavLink to="/planos">Planos</NavLink></li>
                        </ul>
                    </nav>
            </Container>
          
        </HeaderStyled>
    )
}
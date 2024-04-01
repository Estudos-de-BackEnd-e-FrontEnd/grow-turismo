import { ReactNode } from "react"
import { Header } from "../../components/functionals/Header"
import { Footer } from "../../components/functionals/Footer"
import { Container } from "../../components/styled/Container"

interface DefaultLayoutProps{
    children: ReactNode
}

export const DefaultLayout = ({children}: DefaultLayoutProps)=>{
    return (
        <>
            <Header/>
                <Container>
                    <main>
                        {children}
                    </main>
                </Container>
            <Footer/>
        </>
    )
}
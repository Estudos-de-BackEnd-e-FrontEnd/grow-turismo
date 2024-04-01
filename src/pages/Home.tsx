import { Button } from "../components/functionals/Button"
import { Image } from "../components/functionals/Image"
import { Paragraph } from "../components/functionals/Paragraph"
import { Title } from "../components/functionals/Title"
import { DefaultLayout } from "../config/layout/DefaultLayout"
 
export const Home = ()=>{
    return (
        <DefaultLayout>
           <div>
                <Title fontSize="4.8rem">GrowTravel</Title>
                <Paragraph fontSize="2rem">O melhor serviço para você!</Paragraph>
                <Button primary>Saiba mais!</Button>
           </div>

           <div>
                <Image imgName="home"/>
           </div>
        </DefaultLayout>
    )
}
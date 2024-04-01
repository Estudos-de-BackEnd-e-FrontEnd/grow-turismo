import { DefaultLayout } from "../config/layout/DefaultLayout"
import { Image } from "../components/functionals/Image"
import { Title } from "../components/functionals/Title"
import { Paragraph } from "../components/functionals/Paragraph"
export const QuemSomos = ()=>{
    return (
        <DefaultLayout>
            <div>
                <Image imgName="aeroporto"/>
            </div>

            <div>
                <Title fontSize="4.8rem">| Quem Somos</Title>
                <Paragraph fontSize="2rem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsa totam neque consequuntur minima, Et alias laboriosam sit sed voluptatem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam neque consequuntur minima, 
                    quis, tenetur maxime!
                </Paragraph>
            </div>
        </DefaultLayout>
    )
}
import { CardServicos } from "../components/functionals/CardServicos"
import { Image } from "../components/functionals/Image"
import { DefaultLayout } from "../config/layout/DefaultLayout"

export const Servicos = ()=>{
    return (
        <DefaultLayout>
            <CardServicos title="Hospedagem"><Image imgName="hotel"/></CardServicos>
            <CardServicos  title="Roteiros"><Image imgName="roteiro"/></CardServicos>
            <CardServicos title="Pacotes"><Image imgName="viagens"/></CardServicos>
        </DefaultLayout>
    )
}
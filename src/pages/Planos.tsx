import { DefaultLayout } from "../config/layout/DefaultLayout"
import { CardPlanos } from "../components/functionals/CardPlanos"

export const Planos = ()=>{
    return (
        <DefaultLayout>
            <CardPlanos cardTitle="Plano 1">
                <ul>
                    <li>Suporte 24h</li>
                    <li>Serviços de quarto</li>
                    <li>Guia turístico</li>
                </ul>
            </CardPlanos>
            <CardPlanos cardTitle="Plano 2">
                <ul>
                    <li>Suporte 24h</li>
                    <li>Serviços de quarto</li>
                    <li>Guia turístico</li>
                    <li>Roteiro de trilhas</li>
                    <li>Serviço personalizado</li>
                </ul>
            </CardPlanos>
            <CardPlanos cardTitle="Plano 3">
                <ul>
                    <li>Suporte 24h</li>
                    <li>Serviços de quarto</li>
                    <li>Guia turístico</li>
                    <li>Roteiros de trilhas</li>
                    <li>Serviço personalizado</li>
                    <li>Área Vip</li>
                </ul>
            </CardPlanos>
        </DefaultLayout>
    )
}
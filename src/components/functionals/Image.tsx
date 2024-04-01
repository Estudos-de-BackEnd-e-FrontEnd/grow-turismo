import { ImageStyled } from "../styled/ImageStyled";

interface ImageProps{
    width?: string;
    maxWidth?: string;
    imgName: ImageNames
}

type ImageNames = "aeroporto" | "home" | "hotel" | "roteiro" | "viagens" | "vite"

export const Image = ({width, maxWidth, imgName}: ImageProps)=>{
    return (
        <>
            <ImageStyled src={`/src/assets/${imgName}.svg`} width={width} maxWidth={maxWidth}/>
         </>
    )
        
}


 
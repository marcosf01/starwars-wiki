import { Title, Subtitle } from "./styles";

type Props ={
    titulo: string;
    subtitulo: string
}

export function Highlight({ titulo, subtitulo }: Props) {
    return(
        <>
            <Title>
                {titulo}
            </Title>
            <Subtitle>
                {subtitulo}
            </Subtitle>
        </>
        
    )
}
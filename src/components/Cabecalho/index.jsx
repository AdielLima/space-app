import styled from "styled-components"
import CampoTexto from "../CampoTexto";
import { HeaderEstilizado } from './styles'

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <CampoTexto/>
        </HeaderEstilizado>
    )
}
export default Cabecalho;
import search from '../../../public/imagens/search.png';
import { ContainerEstilizado, CampoTextoEstilizado, IconeLupa } from './styles';


const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}
export default CampoTexto;
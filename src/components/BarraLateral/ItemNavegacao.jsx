import { ItemEstilizado } from "./styles";

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo}) => {
    return (
        <>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
            <ItemEstilizado>

            </ItemEstilizado>
        </>
    )
}
export default ItemNavegacao;
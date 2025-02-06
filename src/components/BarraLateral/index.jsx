import ItemNavegacao from "./ItemNavegacao";
import { ListaEstilizada } from "./styles";

const BarraLateral = () => {
    return (
        <aside> {/*ao lado*/}
            <nav>{/*navegação*/}
                <ListaEstilizada>
                    <ItemNavegacao
                        children={"Início"}
                        iconeAtivo="icones/home-ativo.png"
                        iconeInativo="icones/home-inativo.png"
                        ativo
                    >
                        
                    </ItemNavegacao>
                    <ItemNavegacao
                    children={"Mais Vistas"}
                        iconeAtivo="icones/mais-vistas-ativo.png"
                        iconeInativo="icones/mais-vistas-inativo.png"
                        ativo
                    >
                        
                    </ItemNavegacao>
                    <ItemNavegacao
                    children={"Mais Curtidas"}
                        iconeAtivo="icones/mais-curtidas-ativo.png"
                        iconeInativo="icones/mais-curtidas-inativo.png"
                        ativo
                    >
                       
                    </ItemNavegacao>
                    <ItemNavegacao
                    children={"Novas"}
                        iconeAtivo="icones/novas-ativo.png"
                        iconeInativo="icones/novas-inativo.png"
                        ativo
                    >
                    </ItemNavegacao>
                    <ItemNavegacao
                    children={"Surpreenda-me"}
                        iconeAtivo="icones/surpreenda-me-ativo.png"
                        iconeInativo="icones/surpreenda-me-inativo.png"
                        ativo
                    >
                        
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}
export default BarraLateral;




import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais/index.jsx"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral/index.jsx"

const FundoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Cabecalho/>
      <BarraLateral/>
    </FundoGradiente>
  )
}

export default App

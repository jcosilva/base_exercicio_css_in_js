import { EstiloGlobal, Container } from './styles'
import temaOriginal from './themes/original'
import { ThemeProvider } from 'styled-components'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <ThemeProvider theme={temaOriginal}>
        <EstiloGlobal />
        <Cabecalho />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App

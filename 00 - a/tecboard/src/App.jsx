import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
// no react, componentes são FUNÇÕES -> tem return obrigatório





function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>

      <FormularioDeEvento />
    </main>
  )
}

export default App

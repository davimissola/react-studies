import './App.css'
// no react, componentes são FUNÇÕES -> tem return obrigatório





function TituloFormulario(props) {
  return (
    <h2>
      {props.children}
    </h2>
  )
}


function CampoDeFormulario({ children }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}


function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}


function Input(props) {
  return (
    <input { ...props }/>
  )
}


function FormularioDeEvento() {
  return (
    <form action="" className='formevento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <CampoDeFormulario>
        <Label htmlFor="nomeevento">
          Qual o nome do evento?
        </Label>
        <Input type="text" id='nomeevento' placeholder='Summer dev hits!' />
      </CampoDeFormulario>
    </form>
  )
}


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

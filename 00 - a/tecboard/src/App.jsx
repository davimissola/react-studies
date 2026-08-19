import { useState } from 'react'
import './App.css'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'
// no react, componentes são FUNÇÕES -> tem return obrigatório





function App() {
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]
// Use state sera uma lista -> lista[0] seria a lista com os dicionarios de eventos, lista[1] a função que ATUALIZA a lista[0]
const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEvento(evento) {
    // setEventos requer uma lista nova, portando aqui enviamos uma lista nova do zero com tudo que tinha antes em eventos + o novo evento
    setEventos([...eventos, evento])
  }


  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />

      <FormularioDeEvento aoSubmeter={adicionarEvento} />

      <section className='section-card'>
        {temas.map(function (item) {
          return (
            <div key={item.id}>
              <Tema tema={item} />
              <div className='cards-tema'>
              {eventos.map((evento, index) => {
                return (
                  < CardEvento key={index} evento={evento} />
                )
              })}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App

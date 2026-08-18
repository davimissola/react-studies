import './formulario-de-evento.css'
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Input } from "../Input"
import { Label } from "../Label"
import { TituloFormulario } from "../TituloFormulario"
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'




export function FormularioDeEvento() {
  return (
    <form action="" className='formevento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeevento">
            Qual o nome do evento?
          </Label>
          <Input type="text" id='nomeevento' placeholder='Summer dev hits!' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <Input type="date" id='dataEvento' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <ListaSuspensa />
        </CampoDeFormulario>
      </div>
      <Botao>Criar Evento</Botao>
    </form>
  )
}
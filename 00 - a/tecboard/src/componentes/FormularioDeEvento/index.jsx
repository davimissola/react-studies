import './formulario-de-evento.css'
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Input } from "../Input"
import { Label } from "../Label"
import { TituloFormulario } from "../TituloFormulario"
import { Botao } from '../Botao'




export function FormularioDeEvento({ aoSubmeter }) {

  function aoFormSubmetido( formData ) {
    const evento = {
      capa: formData.get('capaEvento'),
      tema: formData.get('temaEvento' ),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento' )
    }
    aoSubmeter(evento)
  }

  return (
    <form action={aoFormSubmetido} className='formevento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeevento">
            Qual o nome do evento?
          </Label>
          <Input type="text" id='nomeevento' name='nomeEvento' placeholder='Summer dev hits!' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="nomeCapa">
            Qual o endereço da imagem de capa?
          </Label>
          <Input type="text" id='nomeCapa' name='capaEvento' placeholder='https://endereço-da-imagem.png' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <Input type="date" name='dataEvento' id='dataEvento' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Tema do evento
          </Label>
          <Input type="text" id="temaEvento" name='temaEvento' placeholder="front-end" />
        </CampoDeFormulario>
      </div>
      <Botao>Criar Evento</Botao>
    </form>
  )
}
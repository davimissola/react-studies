import './titulo-formulario.css'

export function TituloFormulario(props) {
  return (
    <h2 className='titulo-formulario'>
      {props.children}
    </h2>
  )
}
import './botao.css'


export function Botao({ children }) {
    return (
        <button className='button-form'>{ children }</button>
    )
}
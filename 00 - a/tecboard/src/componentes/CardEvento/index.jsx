import './card-evento.css'


export function CardEvento({ evento }) {
    console.log(evento)
    return (
        <div className='card-evento'>
            <img src={ evento.capa } alt={ evento.titulo } />
            <div className="body-card">
                <p className="tag">{ evento.tema.nome }</p>
                <p className="data">{ evento.data.toLocaleDateString('pt-BR') }</p>
                <h4 className='title'>{ evento.titulo }</h4>
            </div>
        </div>
    )
}
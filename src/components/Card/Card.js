import './Card.css'

export default function Card({ item }) {

    return (
        <div className='card'>

            <img className='imagem-cachorro' src={item.url} alt='foto cachorro' />
            <div className='nome'>{item.nome}</div>
            <div className='legeda-card'>
                <p>{item.legenda}</p>
                <div>{item.localizacao}</div>
            </div>

        </div>
    )
}
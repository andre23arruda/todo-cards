import React from 'react'
import CardNota from '../CardNota'
import './ListaDeNotas.css'


const ListaDeNotas = (props) => {
    return (
		<ul className="lista-notas">
			{props.notas.map((nota, index) => (
				<li className="lista-notas_item" key={ index }>
					<CardNota
						apagarNota={ props.apagarNota }
						indice={ index }
						notas={ props.notas }
						setNotas={ props.setNotas }
						nota={ nota }
					/>
				</li>
			))}
		</ul>
    )
}

export default ListaDeNotas

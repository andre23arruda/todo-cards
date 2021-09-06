import React from 'react'
import './CardNota.css'


const CardNota = (props) => {

	function apagar() {
		props.apagarNota(props.notas, props.setNotas, props.indice)
	}

	return (
		<section className="card-nota">
			<span className="delete" onClick={ apagar }>&times;</span>
			<header className="card-nota_cabecalho">
				<h3 className="card-nota_titulo">{ props.nota.titulo }</h3>
			</header>

			<br />

			<h6>{ props.nota.date }</h6>

			<p className="card-nota_texto">{ props.nota.texto }</p>
		</section>
	)
}

export default CardNota

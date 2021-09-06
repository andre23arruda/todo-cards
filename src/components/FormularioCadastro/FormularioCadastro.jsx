import React, { useState } from 'react'
import './FormularioCadastro.css'


const FormularioCadastro = (props) => {

	const [titulo, setTitulo] = useState('')
	const [texto, setTexto] = useState('')

	function criarNota(evento) {
		evento.preventDefault()
		evento.stopPropagation()
		props.criarNota(props.notas, props.setNotas, titulo, texto)
		setTitulo('')
		setTexto('')
	}

	function validateForm() {
		return (
			titulo.length > 0 &&
			texto.length > 0
		)
	}

    return (
		<form
			className="form-cadastro"
			onSubmit={ criarNota }
		>
			<input
				type="text"
				placeholder="Título"
				className="form-cadastro_input"
				value={ titulo }
				onChange={ (e) => setTitulo(e.target.value) }
			/>

			<textarea
				rows={15}
				placeholder="Escreva sua nota..."
				className="form-cadastro_input"
				value={ texto }
				onChange={ (e) => setTexto(e.target.value) }
			/>

			<button className="form-cadastro_submit" disabled={ !validateForm() }>
				Criar Nota
			</button>
		</form>
    )
}

export default FormularioCadastro

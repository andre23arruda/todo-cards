import React, { useState } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'

import { criarNota, deletarNota, loadFromStorage } from './utils/notes'

import './assets/App.css'
import './assets/index.css'


const App = () => {

	const startNotas = loadFromStorage()
	const [notas, setNotas] = useState(startNotas)

	return (
		<section className="conteudo">
			<FormularioCadastro
				criarNota={ criarNota }
				notas={ notas }
				setNotas={ setNotas }
			/>

			<ListaDeNotas
				apagarNota={ deletarNota }
				notas={ notas }
				setNotas={ setNotas }
			/>
		</section>
	)
}

export default App

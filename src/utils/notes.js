function today() {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    return(dd + '/' + mm + '/' + yyyy)
}

function criarNota(notas, setNotas, titulo, texto) {
    const novaNota = { titulo, texto, date: today() }
    const novoArrayNotas = [...notas, novaNota ]
    setNotas(novoArrayNotas)
    localStorage.setItem('notas', JSON.stringify(novoArrayNotas))
}

function deletarNota(notas, setNotas, index) {
    let arrayNotas = notas
    arrayNotas.splice(index, 1)
    setNotas([...arrayNotas])
}

function loadFromStorage() {
    return JSON.parse(localStorage.getItem('notas')) || []
}

export { criarNota, deletarNota, loadFromStorage }
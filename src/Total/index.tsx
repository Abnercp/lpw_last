import React, { useState, useEffect } from 'react'
import { Container } from '../Dashboard/styles'
import api from '../services/api'

interface Exames {
    id: string
    nome: string
    nomeexame: string
    tipoexame: string
    mesanoexame: string
    laboratorio: string
}

const Totais: React.FC = () => {
    const [exames, setExames] = useState<Exames[]>([])

    useEffect(() => {
        api.get('/exames').then(response => setExames(response.data))
    }, [])

    async function handleDelete(id: string) {
        await api.delete(`/exames/${id}`)
        setExames(exames.filter(exam => exam.id !== id))
    }


    return (
        <Container>

            <ul>
                {exames.map((exam, index) =>
                    <li key={index.toString()}>
                        <li>{exam.nome}</li>
                        <li>{exam.tipoexame}</li>
                        <li>{exam.nomeexame}</li>
                        <li>{exam.laboratorio}</li>
                        <li>{exam.mesanoexame}</li>
                        <button onClick={() => handleDelete(exam.id)}>Excluir</button>
                    </li>
                )}
            </ul>
           
        </Container>
    )
}

export default Totais



      
   



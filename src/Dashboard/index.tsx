import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import api from '../services/api'
import { Total } from '../Components/styles'
import { Link } from 'react-router-dom'

interface Exames {
    id: string
    nome: string
    nomeexame: string
    tipoexame: string
    mesanoexame: string
    laboratorio: string
}

const Dashboard: React.FC = () => {
    const [exames, setExames] = useState<Exames[]>([])

    async function handleAddExames(event: any) {
        event.preventDefault()

        const { target: form } = event

        const novoExame = {
            nome: form.nome.value,
            tipoexame: form.tipoexame.value,
            nomeexame: form.nomeexame.value,
            laboratorio: form.laboratorio.value,
            mesanoexame: form.mesanoexame.value,
        }

        const { data } = await api.post('/exames', novoExame)

        setExames([...exames, data])
        form.reset()
    }

    useEffect(() => {
        api.get('/exames').then(response => setExames(response.data))
    }, [])

    async function handleDelete(id: string) {
        await api.delete(`/exames/${id}`)
        setExames(exames.filter(exam => exam.id !== id))
    }


    return (
        <Container>

            <Total>
                <div>
                    <Link to='/total'>
                        <button>Totais</button>
                    </Link>
                </div>
            </Total>


            <form onSubmit={handleAddExames}>
                <input type='text' name='nome' placeholder='Nome' />
                <input type='text' name='tipoexame' placeholder='Tipo Do Exame' />
                <input type='text' name='nomeexame' placeholder='Nome Do Exame' />
                <input type='text' name='laboratorio' placeholder='Laboratório' />
                <input type='text' name='mesanoexame' placeholder='Mes/Ano do Exame' />
                <button type='submit'>Incluir</button> <br></br>
            </form>

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

export default Dashboard



      
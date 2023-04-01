import React, { useState } from 'react'
import "./AddFault.css"
import ErroModal from '../ErroModal/ErroModal'

const AddFault = ({ onAddFault }) => {
    const [fullName, setFullName] = useState("")
    const [faultNumber, setFaultNumber] = useState(0)
    const [erroMessage, setErroMessage] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    function saveFault(event) {
        event.preventDefault()

        if (faultNumber <= 0 || faultNumber > 30) {
            setErroMessage({
                title: "Numero de faltas incorreto",
                description: "Por favor digite um valor valido para falta entre 1 a 30"
            }
            )
            setIsVisible(true)
            setFaultNumber(0)
            return
        }
        if (fullName.length === 0) {
            setErroMessage({
                title: "Nome incorreto",
                description: "Por favor digite um nome valido"
            }
            )
            setIsVisible(true)
            setFullName("")
            return
        }
        onAddFault({ name: fullName, faultNumber: faultNumber })
        setFullName("")
        setFaultNumber(0)
    }
    return (
        <>
            <ErroModal modalState={isVisible} erroInfo={erroMessage} onClose={() => setIsVisible(false)} />
            <form className='fault-form' onSubmit={saveFault}>
                <div className="input-container" onSubmit={saveFault}>
                    <label>Nome completo</label>
                    <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
                </div>
                <div className="input-container">
                    <label>Faltas</label>
                    <input type='number' min={0} value={faultNumber} onChange={(e) => setFaultNumber(e.target.value)}></input>
                </div>
                <button className='add-fault-button' type='submit'>Adicionar</button>
            </form>
        </>
    )
}

export default AddFault
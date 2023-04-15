import React, { useRef, useState } from 'react'
import "./AddFault.css"
import ErroModal from '../ErroModal/ErroModal'

const AddFault = ({ onAddFault }) => {
    const [erroMessage, setErroMessage] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const fullNameRef = useRef();
    const faultNumberRef = useRef();

    function saveFault(event) {
        event.preventDefault()

        let name = fullNameRef.current.value
        let faultNumber = faultNumberRef.current.value

        if (faultNumber <= 0 || faultNumber > 30) {
            setErroMessage({
                title: "Numero de faltas incorreto",
                description: "Por favor digite um valor valido para falta entre 1 a 30"
            }
            )
            setIsVisible(true)
            return;
        }
        if (name.trim().length === 0) {
            setErroMessage({
                title: "Nome incorreto",
                description: "Por favor digite um nome valido"
            }
            )
            setIsVisible(true)
            return
        }

        onAddFault({ name: name, faultNumber: faultNumber })
        fullNameRef.current.value = ""
        faultNumberRef.current.value = ""
    }
    return (
        <>
            <ErroModal modalState={isVisible} erroInfo={erroMessage} onClose={() => setIsVisible(false)} />
            <form className='fault-form' onSubmit={saveFault}>
                <div className="input-container" onSubmit={saveFault}>
                    <label>Nome completo</label>
                    <input type='text'ref={fullNameRef}></input>
                </div>
                <div className="input-container">
                    <label>Faltas</label>
                    <input type='number' min={0} ref={faultNumberRef}></input>
                </div>
                <button className='add-fault-button' type='submit'>Adicionar</button>
            </form>
        </>
    )
}

export default AddFault
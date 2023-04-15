// import ReactDOM from 'react-dom'

import './ErroModal.css'

const ErroModal = ({ modalState, onClose, erroInfo }) => {
    return (
        modalState &&
            <div className='modal-background' >
                <div className="modal-container">
                    <p className='erro-title'>{erroInfo.title}</p>
                    <p className='erro-description'>{erroInfo.description}</p>
                    <button className='close-button' onClick={() => onClose()}>ok</button>
                </div>
            </div>
    )
}

export default ErroModal
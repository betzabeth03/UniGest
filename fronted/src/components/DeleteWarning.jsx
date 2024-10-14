import React from 'react'
import '../css/Exit.css'

export default function DeleteWarning({onCancel, warning, onDelete}) {
    if (!warning) {
        return null;
    }
  return (
    <div>
        <div className={`warning ${warning ? '' : 'cancel'}`}>
            <div className='windonws'>
                <div className='textExit'>
                    <p>¿Seguro que deseas eliminar?</p>
                </div>
                <div className='buttonsExitWindows'>
                    <button className='buttonsExit cancelButton' onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className='buttonsExit aceptButton' onClick={onDelete}>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

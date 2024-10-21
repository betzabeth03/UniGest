import React from 'react';
import Cookies from 'js-cookie';
import '../css/Exit.css';

export default function Exit({ exitEmer, onCancel }) {
    async function logout() {
        Cookies.remove('jwt');
        window.location.replace('/');
    }

    if (!exitEmer) {
        return null;
    }

    return (
        <div className={`exit ${exitEmer ? '' : 'cancel'}`}>
            <div className='windonws'>
                <div className='textExit'>
                    <p>¿Seguro que deseas cerrar sesión?</p>
                </div>
                <div className='buttonsExitWindows'>
                    <button className='buttonsExit cancelButton' onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className='buttonsExit aceptButton' onClick={logout}>
                        Aceptar
                    </button>
                </div>
                
            </div>
        </div>
    );
}

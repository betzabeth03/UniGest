import React from 'react'
import Cookies from 'js-cookie'
import '../css/Exit.css'
export default function Exit({ exitEmer }) {
    async function logout() {
        Cookies.remove('jwt')
        window.location.replace('/')
    }
    let cancel = ''
    if (exitEmer == null) {
        cancel = 'cancel'
    } else {
        if (exitEmer == true) {
            cancel = ' '
        }
    }

    async function cancelar() {
        exitEmer = null 
    }

    return (
        <div className={`exit ${cancel}`}>
            <div className='windonws'>
                <div className='textExit'>
                    <p >
                        ¿Seguro que deseas cerrar sesión?
                    </p>
                </div>
                <div className='buttonsExitWindows'>
                    <button className='buttonsExit' onClick={()=>cancelar()}>
                        Cancelar
                    </button>
                    <button className='buttonsExit' onClick={() => logout()}>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

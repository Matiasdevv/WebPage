import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Acordeones from '../../Components/pure/Acordeones'
import '../../Styles/sideMenu.scss'

const SideMenu = () => {

    const [sideBar, setSide] = useState(false) //todo: meter al sidebar un estado para poder abrir o cerrar este.

    const menu = (e)=>{
        setSide(!sideBar)
        if(sideBar){
            e.target.parentNode.parentNode.firstElementChild.style.width = '0%'
        }else{
            e.target.parentNode.parentNode.firstElementChild.style.width = '100%'
        }
    }


  return (
    <aside className='sideMenu__container'>



        <div className='sideMenu__container-link'>

            <Acordeones/>
        </div>
        <div className='sideMenu__container-button'>
            <input type='checkbox' id='check' onClick={(e)=>menu(e)} hidden/>
            <label htmlFor='check'>
                <i className="bi bi-backspace-reverse"></i>
            </label>

        </div>




    </aside>
  )
}

export default SideMenu
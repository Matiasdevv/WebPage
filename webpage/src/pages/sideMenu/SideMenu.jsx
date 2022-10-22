import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Acordeones from '../../Components/pure/Acordeones'
import '../../Styles/sideMenu.scss'

const SideMenu = () => {

    const [sideBar, setSide] = useState(false) //todo: meter al sidebar un estado para poder abrir o cerrar este.

    const SideMenu = useRef(null)
    const SideMenuContainer = useRef(null)


    useEffect(() => {
        menu()

    }, [])


    const menu = ()=>{

        setSide(!sideBar)

        if(sideBar){
            SideMenuContainer.current.style.width = '100%'
            SideMenu.current.style.width = '25%'
        }else{
            SideMenu.current.style.width = '0%'
            SideMenuContainer.current.style.width = '0%'
        }

    }


  return (
    <aside className='sideMenu__container' onDoubleClick={menu} ref={SideMenuContainer}>
        <div className='sideMenu__container-link' ref={SideMenu}>

            <Acordeones/>
        </div>
        <div className='sideMenu__container-button'>
            <input type='checkbox' id='check' onChange={menu} hidden />
            <label htmlFor='check' >
                <i className="bi bi-backspace-reverse"></i>
            </label>
        </div>




    </aside>
  )
}

export default SideMenu
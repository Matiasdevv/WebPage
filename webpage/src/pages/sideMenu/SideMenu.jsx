import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/sideMenu.scss'

const SideMenu = () => {

    const [sideBar, setSide] = useState(false) //todo: meter al sidebar un estado para poder abrir o cerrar este.

    const menu = (e)=>{
        if(e.target.checked){
            e.target.parentNode.parentNode.firstElementChild.style.display = 'none'
            setSide(!sideBar)


        }else{
            e.target.parentNode.parentNode.firstElementChild.style.display = 'inherit'
            setSide(!sideBar)
        }
    }


  return (
    <div className='sideMenu__container'>

    <div className='sideMenu__container-link'>
        <Link to={'/page2'}>Page 2</Link>
        <Link to={'/page3'}>Page 3</Link>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><Link to={'/page1'}>Page 1</Link></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </div>

    <div className='sideMenu__container-button'>
        <input type='checkbox' id='check' onClick={(e)=>menu(e)} hidden/>
        <label htmlFor='check'>
            <i className="bi bi-backspace-reverse"></i>
        </label>

    </div>



    </div>
  )
}

export default SideMenu
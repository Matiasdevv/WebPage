import React from 'react'
import {Link, Route, Router, Routes, useNavigate} from 'react-router-dom'
import { Home } from '../home/Home'
import '../../Styles/dasboard.scss'
import FeedIcon from '@mui/icons-material/Feed';

const Dashboard = () => {




  return (

        <header className='dash-container'>

          <div className='flex-item logo'>
            <Link to={'/'} className='logo' title='logo' ><i className="bi bi-shop"></i></Link>
          </div>

          <div className='flex-item buscador'>
            <button className='buscador__boton'><i className="bi bi-search" title='buscar'></i></button>
            <input type={'text'} placeholder={'Buscar...'} className='buscador__text' />
          </div>

          <div className='flex-item link-container'>
                <Link to={'/'} className='link' title='Página principal'><i className="bi bi-house-door"></i></Link>
                <Link to={'/sobre-nosotros'} className='link' title='Sobre nosotros'><i className="bi bi-people-fill"></i></Link>
                <a href='https://google.com' className='link' title='Realizar prueba' target={'_blank'} ><FeedIcon/></a>
          </div>

        </header>

  )
}

export default Dashboard
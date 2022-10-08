import React from 'react'
import {Link, Route, Router, Routes, useNavigate} from 'react-router-dom'
import { Home } from '../home/Home'
import '../../Styles/dasboard.scss'

const Dashboard = () => {




  return (

        <div className='dash-container'>

          <div className='flex-item'>
            <Link to={'/'} className='logo' ><i className="bi bi-shop"></i></Link>
          </div>

          <div className='flex-item buscador'>
            <button className='buscador__boton'><i className="bi bi-search"></i></button>
            <input type={'text'} placeholder={'Buscar...'} className='buscador__text' />
          </div>

          <div className='flex-item link-container'>
                <Link to={'/'} className='link' ><i className="bi bi-house-door"></i></Link>
                <Link to={'/Sobre-nosotros'} className='link' ><i className="bi bi-people-fill"></i></Link>
          </div>



        </div>

  )
}

export default Dashboard
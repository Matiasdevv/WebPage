import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='d-flex'>

      <div className='col'>
        <div className='container flex-col'>

        <nav>
          <ul>
            <li>Conocenos</li>
            <li>Contacto</li>
          </ul>
        </nav>
        </div>

        <div className='container flex-col'>

          <a href='https://instagram.com/colegio728' target={'_blank'}><i class="bi bi-instagram"></i></a>
          <a href='https://www.facebook.com/groups/1570328186562978' target={'_blank'}><i class="bi bi-facebook"></i></a>

        </div>
      </div>

        <div className='col'>
          <h5>Hecho con {<i class="bi bi-suit-heart-fill"></i>}</h5>
        </div>

    </footer>
  )
}

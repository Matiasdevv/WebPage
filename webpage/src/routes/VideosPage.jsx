import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { temas } from '../models/Temas'
import '../Styles/Videos.scss'

const VideosPage = () => {

  const url = useParams('video')

  const [video, setVideo] = useState('')


  useEffect(() => {
    FindVideo()
  }, [])


  const FindVideo = ()=>{


    temas.map(tema=>{
      if(tema.tema === url.video) return(setVideo(tema))
    })

  }




  return (
    <section>

      <article className='page__content'>
          <h2>{video.tema}</h2>

          <div className='container video__container'>
            {video.urlVideo}
          </div>
      </article>
      <article>
        <p>{video.descripcion}</p>
      </article>
    </section>
  )
}

export default VideosPage
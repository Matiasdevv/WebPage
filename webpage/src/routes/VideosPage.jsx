import React from 'react'

const VideosPage = ({video}) => {
  return (
    <div>

      <div className='page__content'>
          <p>some text</p>

          <div>
            {video}
          </div>
      </div>
    </div>
  )
}

export default VideosPage
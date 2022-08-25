import React, { useState } from 'react'
import PhotosGallery from './Component/PhotosGallery'

function App () 
{
  const photos =
  [
    'http://placeimg.com/640/480/people',
    'http://placeimg.com/640/480/animals',
    'http://placeimg.com/640/480/tech',
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/nature',
  ]

  return(
    <>
        <h1>Galeria de Fotos</h1>
        <PhotosGallery photos={photos}/>
    </>
    )
}

export default App
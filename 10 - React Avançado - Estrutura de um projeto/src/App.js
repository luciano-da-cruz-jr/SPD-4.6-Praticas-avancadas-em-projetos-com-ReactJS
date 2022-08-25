import React, { useState } from 'react'
import { Button, PhotosGallery } from './components'
import { sanitizeString } from './commons/utils/string'

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

  sanitizeString('teste')

  return(
    <>
        <h1>Galeria de Fotos</h1>
        <PhotosGallery photos={photos}/>
        <Button>Botão</Button>
    </>
  )
}

export default App
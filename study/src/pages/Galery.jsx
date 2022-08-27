import { useEffect, useState } from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'

const Galery = () => {
  const [galery, setGallery] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('Cant load images')
      })
      .then((response) => setGallery(response))
      .catch((e) => setError(e))
  }, [])

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <ImageList variant="masonry" cols={5} gap={4}>
      {galery.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Galery

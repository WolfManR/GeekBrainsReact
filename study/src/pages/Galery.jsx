import { useEffect } from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import {
  fetchAlbum,
  selectAlbum,
  selectError,
  selectIsLoading,
} from '../store/galerySlice'
import { useSelector, useDispatch } from 'react-redux'

const Galery = () => {
  const galery = useSelector(selectAlbum)
  const error = useSelector(selectError)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAlbum(1))
  }, [dispatch])

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return (
      <div>
        <span>Fail to load your album, wanna retry?</span>
        <button onClick={() => dispatch(fetchAlbum(1))}>Retry</button>
      </div>
    )
  }

  return (
    <ImageList variant="masonry" cols={5} gap={4}>
      {galery?.length &&
        galery.map((item) => (
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

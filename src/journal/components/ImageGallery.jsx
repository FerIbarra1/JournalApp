import { ImageList, ImageListItem } from "@mui/material"

export const ImageGallery = ({images}) => {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
      {images.map((image) => (
        <ImageListItem key={image.id}>
          <img 
            src={`${image}?w=164&h=164&fit=crop&auto=format`} 
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota" 
            loading='lazy' 
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

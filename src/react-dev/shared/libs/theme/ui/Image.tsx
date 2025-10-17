// !TODO -перенести в ui

import { useState } from 'react'
import { Skeleton } from '@ui/components/skeleton'

export const Image: React.FC<React.ComponentProps<'img'> & { decorative?: React.ReactNode }> = ({
  className,
  decorative,
  ...props
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const onError = () => setImageError(true)
  const onLoad = () => setImageLoaded(true)

  return (
    <>
      {!imageLoaded && !imageError && <Skeleton className={className} />}
      {/* {imageError && <div className='text-muted-foreground px-2 text-center text-xs'></div>} */}
      {!imageError && <img onError={onError} onLoad={onLoad} className={className} {...props} />}
      {decorative && !imageError && imageLoaded && decorative}
    </>
  )
}

{
  /* <picture>
  <source srcSet={option.image.webp} type="image/webp" />
  <source srcSet={option.image.png} type="image/png" />
  <img 
    src={option.image.png} 
    alt={`${option.label} theme`}
    loading="lazy"
  />
</picture> */
}

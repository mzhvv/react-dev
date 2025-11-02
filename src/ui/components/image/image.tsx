// src/ui/components/image/image.tsx

import { cn } from '@ui/lib'

export type ImageProps = {
  image: {
    webp?: `${string}.webp`
  } & React.ComponentProps<'img'>
}

export const Image: React.FC<ImageProps> = ({ image }) => {
  // prettier-ignore
  const { 
    webp, src, 
    width, height, className, 
    ...props 
  } = image

  return (
    <picture className='block'>
      <source srcSet={webp} type='image/webp' width={width} height={height} />
      <img
        src={src}
        width={width}
        height={height}
        className={cn(
          'aspect-[4/3] size-full object-cover object-center',
          // aspect-[44/35] или 88/70, размер 176/140
          className
        )}
        {...props}
      />
    </picture>
  )
}

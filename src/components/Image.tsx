export type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src'
> & {
  src: string | { src: string; width?: number; height?: number }
  priority?: boolean
  unoptimized?: boolean
}

export default function Image({
  src,
  alt = '',
  priority: _priority,
  unoptimized: _unoptimized,
  ...props
}: ImageProps) {
  const value = typeof src === 'string' ? src : src.src
  return <img src={value} alt={alt} {...props} />
}

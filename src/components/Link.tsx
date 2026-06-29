import { forwardRef } from 'react'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, ...props },
  ref,
) {
  return <a ref={ref} href={href} {...props} />
})

export default Link

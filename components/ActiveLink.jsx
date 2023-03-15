import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ActiveLink ({ className, href, children }) {
  const route = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    route.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} className={`${className} ${route.asPath === href ? 'bg-fuchsia-500' : 'bg-transparent'}`}>
        {children}
    </Link>
  )
}

import { useRouter } from 'next/router'

export function ActiveLink ({ children, className, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={`${router.asPath === href ? 'bg-purple-500' : 'bg-transparent'} ${className}`}>
      {children}
    </a>
  )
}

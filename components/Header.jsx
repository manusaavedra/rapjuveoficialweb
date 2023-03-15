import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaInstagram, FaWhatsapp, FaFacebook, FaTshirt } from 'react-icons/fa'
import { ActiveLink } from './ActiveLink'

export default function Header () {
  return (
    <header className='w-full sticky top-0 left-0 z-50'>
      <div className='flex md:justify-end items-center bg-gradient-to-r from-[#282851] to-[#3f1754] w-full p-2'>
        <Link href='/'>
          <Image className='md:hidden w-auto h-auto' src='/rapjuve-gradient.png?v=323' width={100} height={60} alt='rapjuve mi identidad es Jesus' />
        </Link>
        <nav className='px-4 hidden md:block'>
          <ul className='flex items-center gap-4 text-white'>
            <li>
              <a href='https://www.instagram.com/rapjuveoficial/' title='Instagram' target='_blank' rel='noreferrer'>
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/rapjuve/' title='Facebook' target='_blank' rel='noreferrer'>
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a href='https://web.whatsapp.com/send?phone=59175001584' title='Whatsapp' target='_blank' rel='noreferrer'>
                <FaWhatsapp size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className='flex items-center w-full bg-black justify-center md:hidden overflow-x-scroll scroll-m-0'>
        <ul className='flex items-center gap-4 justify-between py-4 px-4 text-white font-semibold text-md'>
          <li className='min-w-fit'>
            <ActiveLink className='px-4 py-2 rounded-md' href='/#rapjuve'>Sobre Rapjuve</ActiveLink>
          </li>
          <li className='min-w-fit'>
            <ActiveLink className='px-4 py-2 rounded-md' href='/#activity'>Actividades</ActiveLink>
          </li>
          <li className='min-w-fit'>
            <ActiveLink className='px-4 py-2 rounded-md' href='/#faq'>Más frecuentes</ActiveLink>
          </li>
          <li className='min-w-fit'>
            <ActiveLink className='px-4 py-2 rounded-md' href='/leaderboard'>Clasificación</ActiveLink>
          </li>
        </ul>
      </nav>
      <nav className='bg-black w-full items-start justify-between hidden md:flex'>
        <div className='flex items-start'>
          <Link href='/'>
            <Image
              className='relative mt-[-30px]'
              src='/Mi-identidad-logo.png'
              width={120}
              height={120}
              alt='logo'
            />
          </Link>
          <ul className='flex items-center gap-4 py-4 text-white font-semibold'>
            <li>
              <ActiveLink className='px-4 py-2 rounded-md' href='/#rapjuve'>Sobre Rapjuve</ActiveLink>
            </li>
            <li>
              <ActiveLink className='px-4 py-2 rounded-md' href='/#activity'>Actividades</ActiveLink>
            </li>
            <li>
              <ActiveLink className='px-4 py-2 rounded-md' href='/#faq'>Más frecuentes</ActiveLink>
            </li>
            <li>
              <ActiveLink className='px-4 py-2 rounded-md' href='/leaderboard'>Clasificación</ActiveLink>
            </li>
          </ul>
        </div>
        <nav>
          <ul className='flex items-center gap-4 py-4 px-4 text-white'>
            <li>
              <a href='https://api.whatsapp.com/send?phone=59175001584' target='_blank' rel='noreferrer' className='flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white'>
                <FaTshirt size={24} />
                Entradas
              </a>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  )
}

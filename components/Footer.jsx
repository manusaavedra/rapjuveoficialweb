import Image from 'next/image'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer () {
  return (
    <footer className='bg-black text-center p-4 text-white'>
      <div className='container px-6 pt-6 mx-auto'>
        <Image className='mx-auto mb-4 w-auto h-auto' src='/Mi-identidad-logo.png' width={100} height={60} alt='mi identidad logo' />
        <div className='flex justify-center'>
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
        </div>
      </div>
      <div className='pt-6 px-6'>
        <p className='text-xl font-semibold uppercase'>
          Para más información llámanos al:
        </p>
        <a className='text-lg font-bold text-purple-400' href='tel://+59133443333'>+591 (3) 3443333</a>
      </div>
      <div className='py-4'>
        <p>Av Japón #3330 (Entre Av. Alemana y Mutualista)
          Santa Cruz - Bolivia
        </p>
      </div>
      <div className='p-4 text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Copyright
        <a
          className='text-whitehite' href='https://tailwind-elements.com/'
        > Casa de Oración
        </a
                >
      </div>
    </footer>
  )
}

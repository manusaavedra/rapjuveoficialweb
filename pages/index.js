import Head from 'next/head'
import Image from 'next/image'
import { FaTshirt, FaSpotify, FaFileDownload } from 'react-icons/fa'
import ActivityGallery from '../components/Activitys'
import Question from '../components/Faq'
import Steps from '../components/Steps'

export default function Home () {
  return (
    <>
      <Head>
        <title>Rapjuve - Campamento Juvenil Más Grande de Sudamérica. </title>
        <meta name='title' content='Rapjuve - Campamento Juvenil Más Grande de Sudamérica. ' />
        <meta name='description' content='Rapjuve el campamento cristiano que reúne más de 5 mil jóvenes de distintas partes del mundo. Juegos Militares, carreras y plenarias son una de las actividades de este gran campamento.' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Rapjuve - Campamento Juvenil Más Grande de Sudamérica. ' />
        <meta property='og:description' content='Rapjuve el campamento cristiano que reúne más de 5 mil jóvenes de distintas partes del mundo. Juegos Militares, carreras y plenarias son una de las actividades de este gran campamento.' />
        <meta property='og:image' content='/carreras5k.jpg' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Rapjuve - Campamento Juvenil Más Grande de Sudamérica. ' />
        <meta property='twitter:description' content='Rapjuve el campamento cristiano que reúne más de 5 mil jóvenes de distintas partes del mundo. Juegos Militares, carreras y plenarias son una de las actividades de este gran campamento.' />
        <meta property='twitter:image' content='/carreras5k.jpg' />

        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='max-w-4xl overflow-x-hidden m-auto p-3 text-white'>
        <section className='text-white text-center flex flex-col justify-center items-center'>
          <div className='pt-10 flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-4 items-center'>
              <Image src='/camisetaoficial.png' className='w-auto h-auto' priority width={130} height={60} alt='camiseta oficial' />
            </div>
            <h1 className='text-2xl md:text-5xl font-bold my-4 uppercase'>El campamento juvenil más grande de Sudamérica</h1>
            <h4 className='md:text-2xl font-semibold italic'>¡Un campo de entrenamiento para la vida!</h4>
          </div>
          <div className='flex gap-4 items-center'>
            <a href='https://api.whatsapp.com/send?phone=59175001584' target='_blank' rel='noreferrer' className='flex mt-8 items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white'>
              <FaTshirt size={24} />
              Entradas
            </a>
            <a href='/documents/Deslinde_de_Responsabilidad_Rapjuve_2023.pdf' download target='_blank' rel='noreferrer' className='flex mt-8 w-auto items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white'>
              <FaFileDownload size={24} />
              Deslinde
            </a>
          </div>
        </section>

        <section id='rapjuve' className='my-[120px] text-center'>
          <h4 className='uppercase text-4xl font-black text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
            del 6/9 ABRIL
          </h4>
          <p className='uppercase text-2xl font-black'><strong>+5</strong> mil personas</p>
        </section>

        <section className='video p-4 mt-[80px] rounded-lg bg-transparent border-2 border-fuchsia-500'>
          <iframe
            className='w-full rounded-lg aspect-video'
            src='https://www.youtube.com/embed/O0Q_FMbxH_c'
            title='CASA DE ORACION BOLIVIA RESUMEN RAPJUVE 2022'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen
          />
        </section>

        <h4 id='activity' className='mt-[120px] mb-10 text-3xl md:text-4xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
          invitados internacionales de distintas partes del mundo
        </h4>

        <section className='flex flex-col md:flex-row justify-between concierto'>
          <div className='w-[100%] md:w-[50%]'>
            <Image className='mx-auto w-auto' src='/barak.png' priority width={340} height={20} alt='barak en concierto' />
          </div>
          <div className='w-[100%] md:w-[50%] gap-8 flex flex-col items-center md:items-start'>
            <div className='text-center md:text-left'>
              <h2 className='text-2xl font-bold my-4'>Grupo Barak</h2>
              <p className='text-xl'>Barak es una banda de música cristiana originaria de Santo Domingo, República Dominicana. El significado etimológicamente de Barak, cuyo nombre tiene su origen en el antiguo hebreo, en español es «Postrado en adoración».</p>
            </div>
            <a href='https://api.whatsapp.com/send?phone=59175001584' title='Spotify Barak' target='_blank' rel='noreferrer' className='flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white'>
              <FaSpotify size={24} />
              Escuchar
            </a>
          </div>
        </section>

        <h4 className='mt-[120px] mb-10 text-3xl md:text-4xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
          Actividades
        </h4>

        <section className='flex justify-between'>
          <ActivityGallery />
        </section>

        <section className='mt-[120px] w-full flex flex-col items-center'>
          <Steps />
        </section>

        <section id='faq' className='mt-[120px] w-full flex flex-col items-center'>
          <Question />
        </section>

      </main>
    </>
  )
}

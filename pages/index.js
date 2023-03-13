import Head from 'next/head'
import Image from 'next/image'
import { FaTshirt, FaSpotify, FaFileDownload } from 'react-icons/fa'
import ActivityGallery from '../components/Activitys'

export default function Home() {
    return (
        <>
            <Head>
                <title>Rapjuve - Mi identidad es Jesús</title>
                <meta name="description" content="Retiro Apostólico, Profético Juvenil Rapjuve. Campamento más grande de Sudamérica" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className='max-w-4xl overflow-x-hidden m-auto p-3 text-white'>
                <section className='text-white text-center flex flex-col justify-center items-center'>
                    <div className='pt-10 flex flex-col justify-center items-center'>
                        <Image src="/camisetaoficial.png" width={160} height={60} alt="camiseta oficial" />
                        <h1 className='text-4xl md:text-5xl font-bold my-4 uppercase'>El campamento juvenil más grande de Sudamérica</h1>
                        <h4 className='md:text-2xl font-semibold italic'>¡Un campo de entrenamiento para la vida!</h4>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className='mt-8'>
                            <a href="https://api.whatsapp.com/send?phone=59175001584" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white">
                                <FaTshirt size={24} />
                                Entradas
                            </a>
                        </button>
                        <button className='mt-8'>
                            <a href="http://rapjuve.com/wp-content/uploads/2023/03/DESLINDE-DE-RESPONSABILIDAD-RAPJUVE-2023.pdf" target="_blank" rel="noreferrer" className="flex w-auto items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white">
                                <FaFileDownload size={24} />
                                Deslinde
                            </a>
                        </button>
                    </div>
                </section>
                <section id='rapjuve' className='my-[120px] text-center'>
                    <h4 className='uppercase text-4xl font-black text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
                        del 6/9 ABRIL
                    </h4>
                    <p className='uppercase text-2xl font-semibold'>¡No te lo puedes perder!</p>
                </section>
                <section className='video p-4 mt-[80px] rounded-lg bg-transparent border-2 border-fuchsia-500'>
                    <iframe className='w-full rounded-lg aspect-video' src="https://www.youtube.com/embed/O0Q_FMbxH_c" title="CASA DE ORACION BOLIVIA RESUMEN RAPJUVE 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </section>
                <h4 id='activity' className='mt-[120px] mb-10 text-3xl md:text-4xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
                    invitados internacionales de distintas partes del mundo
                </h4>
                <section className='flex flex-col md:flex-row justify-between concierto'>
                    <div className='w-[100%] md:w-[50%]'>
                        <Image className='mx-auto' src="/barak.png" width={420} height={20} alt="barak en concierto" />
                    </div>
                    <div className='w-[100%] md:w-[50%] gap-8 flex flex-col items-center md:items-start'>
                        <div className='text-center md:text-left'>
                            <h2 className='text-2xl font-bold my-4'>Grupo Barak</h2>
                            <p className='text-xl'>Barak es una banda de música cristiana originaria de Santo Domingo, República Dominicana. El significado etimológicamente de Barak, cuyo nombre tiene su origen en el antiguo hebreo, en español es «Postrado en adoración».</p>
                        </div>
                        <button>
                            <a href="https://api.whatsapp.com/send?phone=59175001584" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white">
                                <FaSpotify size={24} />
                                Escuchar
                            </a>
                        </button>
                    </div>
                </section>
                <h4 className='mt-[120px] mb-10 text-3xl md:text-4xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
                    Actividades
                </h4>
                <section className='flex justify-between concierto'>
                    <ActivityGallery />
                </section>
                
                <section id="faq" className='mt-[120px] w-full flex flex-col items-center'>
                    <div class="mx-auto px-5 bg-neutral-900">
                        <div class="flex flex-col items-center">
                            <h4 className='p-6 text-2xl md:text-3xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
                                Preguntas más frecuentes
                            </h4>
                        </div>
                        <div class="grid divide-y divide-neutral-200 mx-auto mt-8">
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span>¿Qué incluye la entrada?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="text-gray-400 mt-3 group-open:animate-fadeIn">
                                        La entrada de este evento incluye: 
                                        <ul>
                                            <li>Transporte</li>
                                            <li>Alimentación</li>
                                            <li>Estadía</li>
                                            <li>Polera oficial del evento</li>
                                            <li>Seguro contra accidentes</li>
                                            <li>Acceso a todas las actividades</li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

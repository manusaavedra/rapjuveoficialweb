export default function Question () {
  return (
    <div className='mx-auto px-5 bg-neutral-900'>
      <div className='flex flex-col items-center'>
        <h4 className='p-6 text-2xl md:text-3xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-400 to-blue-400'>
          Preguntas más frecuentes
        </h4>
      </div>
      <div className='grid divide-y divide-neutral-200 mx-auto mt-8'>
        <div className='py-5'>
          <details className='group'>
            <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
              <span>¿Qué incluye la entrada?</span>
              <span className='transition group-open:rotate-180'>
                <svg fill='none' height='24' shapeRendering='geometricPrecision' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24' width='24'><path d='M6 9l6 6 6-6' />
                </svg>
              </span>
            </summary>
            <div className='text-gray-400 mt-3 group-open:animate-fadeIn'>
              La entrada de este evento incluye:
              <ul className='font-semibold list-disc'>
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
        <div className='py-5'>
          <details className='group'>
            <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
              <span>¿Dónde puedo comprar mi entrada?</span>
              <span className='transition group-open:rotate-180'>
                <svg fill='none' height='24' shapeRendering='geometricPrecision' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24' width='24'><path d='M6 9l6 6 6-6' />
                </svg>
              </span>
            </summary>
            <div className='text-gray-400 mt-3 group-open:animate-fadeIn'>
              <p>Si eres de Santa Cruz Bolivia. Puedes acercarte a nuestras
                instalaciones en la <strong><a className='text-purple-400' href='https://goo.gl/maps/eNRFs4rJN56rSsL7A' target='_blank' rel='noreferrer'>Av Japón #3330 (Entre Av. Alemana y Mutualista) Santa Cruz - Bolivia</a></strong>
              </p>

              <br />

              <p>Para personas fuera de Santa Cruz. Llámanos al numero <a className='text-purple-400' href='tel://+59175001584'><strong>+591 (7) 5001584</strong></a></p>
            </div>
          </details>
        </div>
        <div className='py-5'>
          <details className='group'>
            <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
              <span>¿Comó llegar al templo?</span>
              <span className='transition group-open:rotate-180'>
                <svg fill='none' height='24' shapeRendering='geometricPrecision' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24' width='24'><path d='M6 9l6 6 6-6' />
                </svg>
              </span>
            </summary>
            <div className='text-gray-400 mt-3 group-open:animate-fadeIn'>
              <iframe
                title='googlemaps'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.6716853875528!2d-63.16803048519821!3d-17.760102287856228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7cfb8ae0cd5%3A0x5e9368f835f3dbcf!2sCentro%20Cristiano%20Evang%C3%A9lico%20Casa%20de%20Oraci%C3%B3n!5e0!3m2!1ses!2ses!4v1678717108607!5m2!1ses!2ses'
                width='100%'
                height='180'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </details>
        </div>
        <div className='py-5'>
          <details className='group'>
            <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
              <span>¿Cual es la edad mínima para participar?</span>
              <span className='transition group-open:rotate-180'>
                <svg fill='none' height='24' shapeRendering='geometricPrecision' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24' width='24'><path d='M6 9l6 6 6-6' />
                </svg>
              </span>
            </summary>
            <div className='text-gray-400 mt-3 group-open:animate-fadeIn'>
              <h4 className="text-xl"><b>14 años</b> es la edad mínima para participar.</h4>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

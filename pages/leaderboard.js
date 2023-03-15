import Head from 'next/head'
import IconSquadron from '../components/IconSquadron'

const mysql = require('mysql2/promise')

export default function TeamsGroups ({ leaderboard }) {
  return (
    <>
      <Head>
        <title>Rapjuve - Clasificación</title>
        <meta name='title' content='Rapjuve - Clasificación' />
        <meta name='description' content='Tabla del puntaje de cada escuadrón y la posición que ocupa en la competición.' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Rapjuve - Clasificación' />
        <meta property='og:description' content='Tabla del puntaje de cada escuadrón y la posición que ocupa en la competición.' />
        <meta property='og:image' content='/juegos-militares.jpg' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Rapjuve - Clasificación' />
        <meta property='twitter:description' content='Tabla del puntaje de cada escuadrón y la posición que ocupa en la competición.' />
        <meta property='twitter:image' content='/juegos-militares.jpg' />

        <link rel='icon' href='/favicon.png' />
      </Head>
      <h4 className='my-[50px] text-3xl text-white text-center font-black'>Tabla de posiciones</h4>
      <section className='mb-[50px] p-2'>
        <div className='leaderboard max-w-3xl mx-auto text-white rounded-md p-4'>
          <div className='flex border-b-2  justify-between items-center'>
            <span className='font-black text-xl text-gray-500'>Escuadrón</span>
            <p className='font-black text-xl text-gray-500'>Puntos</p>
          </div>
          {
            leaderboard.map((board, index) => (
              <div className={`flex py-4 px-0 justify-between items-center ${index % 2 === 0 ? 'bg-[rgba(255,255,255,.1)]' : ''}`} key={board.id}>
                <div className='flex gap-2 justify-between relative'>
                  <div className='w-16 flex justify-center'>
                    <IconSquadron team={board.team} />
                  </div>
                  <span className='font-semibold text-2xl'>{board.team}</span>
                </div>
                <p className='font-black text-3xl px-2'>{board.score}</p>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

  const [rows] = await connection.query('SELECT * FROM `leaderboard` WHERE `score` ORDER BY score DESC')

  return {
    props: {
      leaderboard: [...rows]
    }
  }
}

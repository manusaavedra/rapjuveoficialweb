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
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='text-left'>#</th>
                <th className='text-left'>Escuadrón</th>
                <th className='text-right'>Puntos</th>
              </tr>
            </thead>
            <tbody>
              {
                leaderboard.map((board, index) => (
                  <tr key={board.id} className='even:bg-black odd:bg-gray-800'>
                    <td className='text-left'>
                      <span className='text-xl font-black'>{index + 1}º</span>
                    </td>
                    <td>
                      <div className='flex gap-2 py-2'>
                        <div className='w-16 flex justify-center'>
                          <IconSquadron team={board.team} />
                        </div>
                        <span className='font-semibold text-2xl'>{board.team}</span>
                      </div>
                    </td>
                    <td className='text-right'>
                      <p className='font-black text-3xl'>{board.score}</p>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
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
    database: process.env.DB_NAME
  })

  const [rows] = await connection.query('SELECT * FROM `leaderboard` WHERE `score` ORDER BY `score` DESC')

  return {
    props: {
      leaderboard: [...rows]
    }
  }
}

import Image from "next/image";

export default function ActivityGallery() {
    return (
        <div className="flex w-full flex-wrap gap-4 justify-center text-white">
            <article className="text-center relative">
                <div className="tumbnail border-2 border-fuchsia-300 p-2 rounded-md">
                    <Image className="m-auto rounded-md" src="/juegos-militares.jpg" width={320} height={320} alt="juegos militares rapjuve" />
                </div>
                <h4 className="text-4xl font-bold absolute top-5 right-4 uppercase text-right">Juegos Militares</h4>
            </article>
            <article className="text-center relative">
                <div className="tumbnail border-2 border-fuchsia-300 p-2 rounded-md">
                    <Image className="m-auto rounded-md" src="/conciertos.jpg" width={320} height={320} alt="juegos militares rapjuve" />
                </div>
                <h4 className="text-4xl font-bold absolute top-5 right-4 uppercase text-right">Conciertos</h4>
            </article>
            <article className="text-center relative">
                <div className="tumbnail border-2 border-fuchsia-300 p-2 rounded-md">
                    <Image className="m-auto rounded-md" src="/carreras5k.jpg" width={320} height={320} alt="juegos militares rapjuve" />
                </div>
                <h4 className="text-4xl font-bold absolute top-5 right-4 uppercase text-right">Carrera 5k</h4>
            </article>
            <article className="text-center relative">
                <div className="tumbnail border-2 border-fuchsia-300 p-2 rounded-md">
                    <Image className="m-auto rounded-md" src="/campos-tematicos.jpg" width={320} height={320} alt="juegos militares rapjuve" />
                </div>
                <h4 className="text-4xl font-bold absolute top-5 right-4 uppercase text-right">Campamentos temáticos</h4>
            </article>
            <article className="text-center relative">
                <div className="tumbnail border-2 border-fuchsia-300 p-2 rounded-md">
                    <Image className="m-auto rounded-md" src="/plenarias.jpg" width={320} height={320} alt="juegos militares rapjuve" />
                </div>
                <h4 className="text-4xl font-bold absolute top-5 right-4 uppercase text-right">Plenarias</h4>
            </article>
            <article className="text-center relative">
                <div className="tumbnail border-2 border-fuchsia-300 p-2 rounded-md">
                    <Image className="m-auto rounded-md" src="/noches-de-talentos.jpg" width={320} height={320} alt="juegos militares rapjuve" />
                </div>
                <h4 className="text-4xl font-bold absolute top-5 right-4 uppercase text-right">Noche de Talentos</h4>
            </article>
        </div>
    )
}
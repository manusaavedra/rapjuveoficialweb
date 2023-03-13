import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaWhatsapp, FaFacebook, FaTshirt } from "react-icons/fa"

export default function Header() {
    return (
        <header className="w-full">
            <div className="flex justify-end items-center bg-gradient-to-r from-[#282851] to-[#3f1754] w-full p-2">
                <nav className="px-4 hidden md:block">
                    <ul className="flex items-center gap-4 text-white">
                        <li>
                            <a href="https://www.instagram.com/rapjuveoficial/" target="_blank" rel="noreferrer">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/rapjuve/" target="_blank" rel="noreferrer">
                                <FaFacebook size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://web.whatsapp.com/send?phone=59175001584" target="_blank" rel="noreferrer">
                                <FaWhatsapp  size={24}/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav className="bg-black w-full items-start justify-between hidden md:flex">
                <div className="flex items-start">
                    <Image
                        className="relative mt-[-30px]"
                        src="/Mi-identidad-logo.png"
                        width={120}
                        height={120}
                        alt="logo"
                    />
                    <ul className="flex items-center gap-4 py-4 text-white font-semibold">
                        <li>
                            <Link href="/#rapjuve">¿Que es Rapjuve?</Link>
                        </li>
                        <li>
                            <Link href="/#activity">Actividades</Link>
                        </li>
                        <li>
                            <Link href="/#faq">Más frecuentes</Link>
                        </li>
                        <li>
                            <Link href={"/escuadrones"}>Escuadrones</Link>
                        </li>
                    </ul>
                </div>
                <nav>
                    <ul className="flex items-center gap-4 py-4 px-4 text-white">
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=59175001584" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#462558] to-[#21092e] border-2 border-[#462558] text-white">
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
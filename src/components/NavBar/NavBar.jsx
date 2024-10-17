import { Link } from "wouter";
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";


function NavBar() {
    return (
        <>
            <div className="hidden lg:flex justify-center items-center gap-x-20 pt-8 pb-8 pl-24 pr-24 text-xl">
                <Link href="/about">Kto sme</Link>
                <Link href="">Kalendár udalostí</Link>
                <Link href="">Galéria</Link>
                <Link href="/"><img src="/logo.png" alt="" width={88} height={88}/></Link>
                <Link href="">Kontakt</Link>
                <Link href="">Chcem sa pridať</Link>
                <div className="flex gap-x-5">
                    <a href="https://www.instagram.com/prazskakaviaren/" target="_blank" rel="noreferrer noopener"><IoLogoInstagram size={24}></IoLogoInstagram></a>
                    <a href=""><IoMailOutline size={24}></IoMailOutline></a>
                </div>
            </div>
            <div className="flex flex-col items-center pt-8 lg:hidden">
                <Link href="/"><img src="/logo.png" alt="" width={88} height={88}/></Link>
                <div className="border-0 rounded-md blur-xl flex-1 block text-xl mt-4">
                    <Link href="/about">Kto sme</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar
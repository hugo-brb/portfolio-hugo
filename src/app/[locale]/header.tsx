import Link from "next/link"
import { useTranslations } from "next-intl"

import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Header(){
    const t = useTranslations("Header");

    return <>
    <header className=" font-chakrapetch w-full hidden md:flex justify-between items-center pl-7 pr-7 min-h-[12vh] text-lg ">
        <Link href="/">
            <h2 className=" fadein hover:scale-[1.2] font-krungthep text-3xl duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#E6007E] to-[#67348B] ">
                Hugo BARBIERI
            </h2>
        </Link>
        <nav>
            <ul className=" flex justify-between items-center gap-3">
                <Link href="/" className=" fadein hover:text-[#67348b] hover:underline underline-offset-4 duration-300"><li>{t('Accueil')}</li></Link>
                <li className=" fadein">/</li>
                <Link href="/projets" className=" fadein hover:text-[#67348b] hover:underline underline-offset-4 duration-300"><li>{t('Projets')}</li></Link>
                <li className=" fadein">/</li>
                <Link href="/contact" className=" fadein hover:text-[#67348b] hover:underline underline-offset-4 duration-300"><li>{t('Contact')}</li></Link>
                <li className=" fadein">|</li>
                <li className=" fadein"><LanguageSwitcher/></li>
            </ul>
        </nav>
    </header>

    <header className=" font-chakrapetch w-full h-full flex flex-col md:hidden items-center gap-5 mt-5 pl-7 pr-7 min-h-[12vh] text-lg ">
        <Link href="/">
            <h2 className=" fadein font-krungthep h-full text-3xl duration-300 hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#E6007E] to-[#67348B] ">
                Hugo BARBIERI
            </h2>
        </Link>
        <nav>
            <ul className=" flex justify-between items-center gap-3">
                <Link href="/" className=" fadein hover:text-[#67348b] hover:underline underline-offset-4 duration-300"><li>{t('Accueil')}</li></Link>
                <li className=" fadein">/</li>
                <Link href="/projets" className=" fadein hover:text-[#67348b] hover:underline underline-offset-4 duration-300"><li>{t('Projets')}</li></Link>
                <li className=" fadein">/</li>
                <Link href="/contact" className=" fadein hover:text-[#67348b] hover:underline underline-offset-4 duration-300"><li>{t('Contact')}</li></Link>
                <li className=" fadein">|</li>
                <li className=" fadein"><LanguageSwitcher/></li>
            </ul>
        </nav>
    </header>

    <div className=" w-full h-[0.4vh] bg-[#2c2c2c]"></div>
    </> 
} 
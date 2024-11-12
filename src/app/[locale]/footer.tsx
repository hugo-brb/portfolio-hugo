'use client'

import Link from "next/link"
import { useParams } from 'next/navigation';

// Définition des types
type Locale = 'fr' | 'en' | 'it';

interface Translations {
    Acces: string;
    Accueil: string;
    Projets: string;
    Contact: string;
    Download: string;
    Reseaux: string;
}

interface TranslationsMap {
    fr: Translations;
    en: Translations;
    it: Translations;
}

export default function Footer(){
    const params = useParams();
    const locale = (params.locale as Locale) || 'fr';

    // Définition de l'objet de traductions
    const translations: TranslationsMap = {
        fr: {
            Acces: 'Accès',
            Accueil: 'Accueil',
            Projets: 'Projets',
            Contact: 'Contact',
            Download: 'Télécharger CV',
            Reseaux: 'Réseaux Sociaux'
        },
        en: {
            Acces: 'Access',
            Accueil: 'Home',
            Projets: 'Projects',
            Contact: 'Contact',
            Download: 'Download CV',
            Reseaux: 'Social Networks'
        },
        it: {
            Acces: 'Accesso',
            Accueil: 'Home',
            Projets: 'Progetti',
            Contact: 'Contatto',
            Download: 'Scarica CV',
            Reseaux: 'Social Media'
        }
    };

    // Fonction de traduction typée
    const t = (key: keyof Translations): string => {
        return translations[locale]?.[key] || translations.fr[key];
    };
    
    const cvFile = {
        fr: '/doc/CV-Hugo_BARBIERI-fr.pdf',
        en: '/doc/CV-Hugo_BARBIERI-en.pdf',
        it: '/doc/CV-Hugo_BARBIERI-it.pdf'
    };

    const selectedCvFile = cvFile[locale] || cvFile['fr'];

    return <>
        <div className="w-full h-[0.5vh] bg-[#2c2c2c]"></div>
        <footer className="fadein font-chakrapetch w-full h-full px-32 pt-7 pb-1 md:flex flex-col gap-7 hidden">
            <div className="flex justify-around gap-7">
                <section className="flex flex-col gap-1">
                    <h2>{t('Acces')}</h2>
                    <nav>
                        <ul className="ml-7 text-sm list-['↬']">
                            <Link href={`/${locale}`}>
                                <li className="hover:text-[#67348b] duration-300">&ensp;<span className="hover:underline hover:underline-offset-2">{t('Accueil')}</span></li>
                            </Link>
                            <Link href={`/${locale}/projets`}>
                                <li className="hover:text-[#67348b] duration-300">&ensp;<span className="hover:underline hover:underline-offset-2">{t('Projets')}</span></li>
                            </Link>
                            <Link href={`/${locale}/contact`}>
                                <li className="hover:text-[#67348b] duration-300">&ensp;<span className="hover:underline hover:underline-offset-2">{t('Contact')}</span></li>
                            </Link>
                        </ul>
                    </nav>
                </section>
                <section className="w-0 max-h-32 border border-r-1 border-[#f2f4f3]"/>
                <section className="flex flex-col gap-4 items-center">
                    <h2>{t('Download')}</h2>
                    <a href={selectedCvFile} download>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-12 fill-white hover:scale-110 hover:fill-[#67348b] cursor-pointer duration-300">
                            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                        </svg>
                    </a>
                    <p className="font-chakrapetch text-center w-auto text-sm pt-7">@2024-2025 by Hugo BARBIERI</p>
                </section>
                <section className="w-0 max-h-32 border border-r-1 border-[#f2f4f3]"/>
                <section className="flex flex-col gap-4 items-center">
                    <h2>{t('Reseaux')}</h2>
                    <div className="flex gap-3">
                        <a href="mailto:hugobarbieri38@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-12 cursor-pointer fill-white hover:scale-110 hover:fill-[#67348b] duration-300">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/hugo-brb" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="size-12 cursor-pointer fill-white hover:scale-110 hover:fill-[#67348b] duration-300">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/hugo-barbieri-9b37982a1/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-12 cursor-pointer fill-white hover:scale-110 hover:fill-[#67348b] duration-300">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>    
        </footer>

        {/* Version mobile du footer */}
        <footer className="fadein font-chakrapetch w-full h-full flex flex-col justify-around px-9 pt-7 pb-1 gap-1 md:hidden">
        <div className=" flex justify-center items-center gap-7 w-full h-full mb-4 ml-3">
            <section className="flex flex-col gap-1">
                <h2 className=" text-center pb-2">{t('Acces')}</h2>
                <nav>
                    <ul className=" ml-7 text-sm list-['↬'] ">
                        <Link href="/">
                            <li className="hover:text-[#67348b] duration-300" >&ensp;<span className="hover:underline hover:underline-offset-2">{t('Accueil')}</span></li>
                        </Link>
                        <Link href="/projets">
                            <li className="hover:text-[#67348b] duration-300">&ensp;<span className="hover:underline hover:underline-offset-2">{t('Projets')}</span></li>
                        </Link>
                        <Link href="/contact">
                            <li className="hover:text-[#67348b] duration-300">&ensp;<span className="hover:underline hover:underline-offset-2">{t('Contact')}</span></li>
                        </Link>
                    </ul>
                </nav>
            </section>
            <section className="w-0 h-32 self-center border border-r-1 border-[#f2f4f3] "/>
            <section className=" flex flex-col gap-4 items-center">
                <h2>{t('Reseaux')}</h2>
                <div className=" flex gap-3">
                    <a href="https://github.com/hugo-brb" target="_blank" rel="Lien vers mon Github">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className=" size-12 cursor-pointer fill-white hover:scale-110 hover:fill-[#67348b] duration-300">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/hugo-barbieri-9b37982a1/" target="_blank" rel="Lien vers mon linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=" size-12 cursor-pointer fill-white hover:scale-110 hover:fill-[#67348b] duration-300">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
            <div className=" flex flex-col gap-7 ">
                <section className=" flex flex-col gap-4 items-center">
                <h2 className=" text-center">{t('Download')}</h2>
                <a href="/doc/CV-Hugo_BARBIERI-fr.pdf" download>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-12 fill-white hover:scale-110 hover:fill-[#67348b] cursor-pointer duration-300">
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                    </svg>
                </a>
                </section>
            </div>
        </footer>
        <p className="block md:hidden font-chakrapetch text-center w-auto text-sm pt-7 pb-2">@2024-2025 by Hugo BARBIERI</p>
    </>;
}
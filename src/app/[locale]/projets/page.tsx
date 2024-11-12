import ModalCarrousel from "../../components/ModalCarrousel";
import { useTranslations } from "next-intl";

//IMAGES
  //Chief's Arena
const imagesChief = [
  '/images/ChiefsArena/Home.png',
  '/images/ChiefsArena/Create-Concours.png',
  '/images/ChiefsArena/Create-Concours.png',
  '/images/ChiefsArena/Edit-Concours.png',
  '/images/ChiefsArena/Account.png',
  '/images/ChiefsArena/Abonnement.png',
  '/images/ChiefsArena/Analyse.png',
];
  //Portfolio
const imagesPortfolio = [
  '/images/Portfolio/Home.png',
  '/images/Portfolio/Projets.png',
  '/images/Portfolio/Contact.png',
];


export default function Projects(){
    const t = useTranslations("ProjetsPage");
    return <>
    <main className=" font-chakrapetch pt-8 gap-8 max-w-[95vw] md:w-3/4 min-h-[87.6vh] flex flex-col justify-start items-center mx-auto">
    <h1 className=" fadein font-krungthep text-4xl">{t('MyProjets')}</h1>
    <div className=" fadein w-[35%] h-[0.4vh] bg-[#2c2c2c]"></div>
    <p className=" fadein max-w-2xl text-center">{t('Intro')}</p>
    <div className=" fadein w-[35%] h-[0.4vh] bg-[#2c2c2c]"></div>

    <article className=" flex flex-col gap-24 max-w-2xl mb-8">
      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Octobre')} 2024 - {t('Janvier')} 2025</h3>
        <h2 className=" text-2xl font-krungthep mb-1">{t('P1')}</h2> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            NextJs
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            React
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Django
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Bpmn
          </span>
        </div>         
        <p>
        {t('P1-1')}
        <br /> <br />
        {t('P1-2')}
        </p>
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Octobre')} 2024</h3>
        <h2 className=" text-2xl font-krungthep mb-1">{t('P2')}</h2> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            NextJs
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            React
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            i18n
          </span>
        </div>         
        <p>
        {t('P2-1')}
        <br /> <br />
        {t('P2-2')}
        </p>
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Mai')} - {t('Juin')} 2024</h3>
        <h2 className=" text-2xl font-krungthep">{t('P3')}</h2> 
        <h3 className=" text-xl font-andalemo text-[#67348b] mb-1">Chief&#39;s Arena</h3> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            JavaFx
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            UML
          </span>
        </div>         
        <p>
        {t('P3-1')}
        <br /> <br />
        {t('P3-2')} <b>{t('P3-3')}</b>{t('P3-4')}
        </p>
        <a href="https://github.com/hugo-brb/Projets_etu" target="_blank" className=" flex gap-2 mt-2 items-center underline underline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-4 fill-white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
          </svg>
          {t('LienProjet')}
        </a>
        <div className=" flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className=" size-4 fill-[#67348b]">
            <path d="M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"/>
          </svg>
          <ModalCarrousel images={imagesChief} />
        </div>
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Mai')} 2024</h3>
        <h2 className=" text-2xl font-krungthep mb-1">{t('P4')}</h2> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            React
          </span>
        </div>         
        <p>
        {t('P4-1')}
        <br /><br />
        {t('P4-2')}
        </p>
        <a href="https://www.ovh.com/manager/#/web/configuration/hosting/hugobar.cluster029.hosting.ovh.net" target="_blank" className=" flex gap-2 mt-2 items-center underline underline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-4 fill-white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
          </svg>
          {t('LienProjet')}
        </a>
        <div className=" flex gap-2 items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className=" size-4 fill-[#67348b]">
            <path d="M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"/>
          </svg>
          <ModalCarrousel images={imagesPortfolio} />
        </div>
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Janvier')} 2024</h3>
        <h2 className=" text-2xl font-krungthep">{t('P5')}</h2> 
        <h3 className=" text-xl font-andalemo text-[#67348b] mb-1">{t('P5-1')}</h3> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Java
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            UML
          </span>
        </div>         
        <p>
        {t('P5-2')}
        <br /><br />
        {t('P5-3')}
        </p>
        <a href="https://github.com/hugo-brb/Projets_etu" target="_blank" className=" flex gap-2 mt-2 items-center underline underline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-4 fill-white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
          </svg>
          {t('LienProjet')}
        </a>
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Decembre')} 2023</h3>
        <h2 className=" text-2xl font-krungthep">{t('P6')}</h2> 
        <h3 className=" text-xl font-andalemo text-[#67348b] mb-1">NutriScore</h3> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            PostgreSql
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Bash
          </span>
        </div>         
        <p>
        {t('P6-1')}
        <br /><br />
        {t('P6-2')}
        </p>
        <a href="https://github.com/hugo-brb/Projets_etu" target="_blank" className=" flex gap-2 mt-2 items-center underline underline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-4 fill-white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
          </svg>
          {t('LienProjet')}
        </a>
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Novembre')} 2023</h3>
        <h2 className=" text-2xl font-krungthep mb-1">{t('P7')}</h2> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Java
          </span>
        </div>         
        <p>
        {t('P7-1')}
        <br /><br />
        {t('P7-2')}
        </p>
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Octobre')} 2023</h3>
        <h2 className=" text-2xl font-krungthep mb-1">{t('P8')}</h2> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Bash
          </span>
        </div>   
        <p>
        {t('P8-1')}
        <br /><br />
        {t('P8-2')}
        </p>
        <a href="https://github.com/hugo-brb/Projets_etu" target="_blank" className=" flex gap-2 mt-2 items-center underline underline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-4 fill-white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
          </svg>
          {t('LienProjet')}
        </a>    
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Septembre')} 2023</h3>
        <h2 className=" text-2xl font-krungthep mb-1">{t('P9')}</h2> 
        <h3 className=" text-xl font-andalemo text-[#67348b] mb-1">Orange Business</h3> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Html
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Css
          </span>
        </div>   
        <p>
        {t('P9-1')}
        <br /><br />
        {t('P9-2')}
        </p>
        <a href="https://github.com/hugo-brb/Projets_etu" target="_blank" className=" flex gap-2 mt-2 items-center underline underline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-4 fill-white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
          </svg>
          {t('LienProjet')}
        </a>    
      </div>

      <div className=" fadein flex flex-col form-contact">
        <h3 className=" text-base font-bold text-[#2c2c2c]">{t('Mars')} 2023</h3>
        <h2 className=" text-2xl font-krungthep">{t('P10')}</h2>
        <h3 className=" text-xl font-andalemo text-[#67348b] mb-1">Multi Rénovation Belledonne</h3> 
        <div className=" mb-4 flex gap-2">
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Html
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Css
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            Js
          </span>
          <span className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
            php
          </span>
        </div>         
        <p>
        {t('P10-1')}
        <br /><br />
        {t('P10-2')}
        </p>
        <a href="https://multi-renovation-belledonne.fr" target="_blank" className=" flex gap-2 mt-2 items-center underline underline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-4 fill-white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
          </svg>
          {t('LienProjet')}
        </a>
      </div>
    </article>

    </main>
    
    </>
}
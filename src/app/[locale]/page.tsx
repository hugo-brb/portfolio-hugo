"use client"

import { useTranslations } from "next-intl";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import RotateText from "../components/RotateText";

import "../css/idCard.css";
import "../css/projetsCard.css";
import "../css/vP.css";

import Me from "../img/getPhoto.jpg";
import MeSF from "../img/meSF.png";

interface FormData {
  genre: string;
  name: string;
  entreprise: string;
  email: string;
  message: string;
}


export default function Home() {
  const t = useTranslations("HomePage");

  const [formData, setFormData] = useState<FormData>({
    genre: '',
    name: '',
    entreprise: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'radio' ? (e.target as HTMLInputElement).id : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Message envoyé !');
        setFormData({
          genre: '',
          name: '',
          entreprise: '',
          email: '',
          message: ''
        });
        window.alert('Votre message a été envoyé avec succès !\nJe vous répondrai dans les plus brefs délais.');
      } else {
        console.error('Erreur lors de l\'envoi.');
        window.alert('Une erreur est survenue lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      window.alert('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

    return <>
      <main className=" flex flex-col font-chakrapetch">
      <section className="Home relative flex flex-col justify-between font-andalemo text-lg font-bold w-full min-h-[87.6vh] pl-3 py-3">
        <h2>{t('Loc')}</h2>
        <div className="flex justify-start items-center gap-3 h-full">
          <h2 className="-ml-10 -rotate-90">Portfolio</h2>
          <div className=" flex flex-col gap-0 justify-start h-full">
            <h1 className="font-krungthep text-4xl md:text-8xl h-full bg-clip-text text-transparent bg-gradient-to-r from-[#E6007E] to-[#67348B]">
              {t('Dev')}
            </h1>
            <RotateText />
          </div>
        </div>
        <h2>Fullstack</h2>
      </section>

        <div className=" w-full h-[0.4vh] bg-[#2c2c2c]"></div>

        <section className=" w-full  min-h-[100vh] flex md:flex-row flex-col self-center justify-start items-center py-3 pr-3">
          <div className=" self-start ml-5 md:self-auto md:-rotate-90 md:-ml-10">
            <h2 className=" font-krungthep text-4xl">{t('Apropos')}</h2>
          </div>
          <div className=" fadein parent md:block hidden">
            <div className="card">
              <div className="logo">
                  <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className=" circle circle3">
                      <Image src={MeSF} alt="Photo de profil" className="w-full rounded-full"></Image>
                    </span>
              </div>
              <div className="glass"></div>
                <div className="content">
                  <span className="title">Hugo BARBIERI</span>
                  <span className="text">{t('Idhugo')}</span>
                </div>
                <div className="bottom">
                  <div className="social-buttons-container">
                    <a href="mailto:hugobarbieri38@gmail.com" target="_blank">
                      <button className="social-button .social-button1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg fill-white">
                          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                        </svg>
                      </button>
                    </a>
                    <a href="https://github.com/hugo-brb" target="_blank" rel="Lien vers mon Github">
                      <button className="social-button .social-button2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg fill-white">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                      </button>
                    </a>
                    <a href="https://www.linkedin.com/in/hugo-barbieri-9b37982a1/" target="_blank" rel="Lien vers mon linkedin">
                      <button className="social-button .social-button3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg fill-white">
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </div>
              <div className=" hidden md:flex flex-col gap-4 max-w-lg ml-12">
                <h2 className=" fadein font-krungthep text-4xl">{t('My+')}</h2>
                <div className=" fadein flex gap-6 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" fill-[#67348b] size-10">
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                  </svg>
                  <p className=" max-w-md">{t('Facination')}</p>
                </div>
                <div className=" fadein flex gap-6 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className=" fill-[#67348b] size-10">
                    <path d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"/>
                  </svg>
                  <p className=" max-w-md">{t('Lang')}</p>
                </div>
                <div className=" fadein flex gap-6 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" fill-[#67348b] size-10">
                    <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                  </svg>
                  <p className=" max-w-md">{t('Permis')}</p>
                </div>
            </div>

          <div className="flex flex-col max-w-[95vw] justify-start items-center gap-7 md:hidden pt-4 pb-12 pl-2">
            <Image src={Me} alt="Photo de moi" className=" fadein rounded-[100%]" width={150}/>
            <p className=" fadein text-justify aboutHome">
              {t('Idhugo')}
            </p>
            <div className=" fadein w-[70%] h-[0.4vh] bg-[#2c2c2c]"></div>
            <h2 className=" fadein font-krungthep text-4xl">{t('My+')}</h2>
                <div className=" fadein flex gap-4 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" fill-[#67348b] size-24">
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                  </svg>
                  <p className=" max-w-md">{t('Facination')}</p>
                </div>
                <div className=" fadein flex gap-4 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className=" fill-[#67348b] size-24">
                    <path d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"/>
                  </svg>
                  <p className=" max-w-md">{t('Lang')}</p>
                </div>
                <div className=" fadein flex gap-4 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" fill-[#67348b] size-24">
                    <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                  </svg>
                  <p className=" max-w-md">{t('Permis')}</p>
                </div>
          </div>
          

        </section>

        <div className=" w-full h-[0.4vh] bg-[#2c2c2c]"></div>

        <section className=" w-full md:min-h-[100vh] flex flex-col md:flex-row self-center justify-start items-center mb-7 md:mb-0 py-3 md:mr-0">
          <div className=" self-start ml-5 md:-rotate-90 md:-ml-10 md:self-center">
            <h2 className="font-krungthep text-4xl">{t('Projets')}</h2>
          </div>
          <div className=" self-center w-full flex flex-col justify-center items-center gap-7 md:gap-24">
            <nav className=" w-full flex flex-col md:flex-row justify-around items-center gap-3 flex-wrap">
              <Link href="/projets">
              <div className=" fadein mt-12">
                <div className="Pcard pr-7 md:pr-0">
                  <div className="Pmain-content">
                    <div className="Pheader">
                      <span>{t('Projetsd')}</span>
                      <span>{t('Octobre')} 2024</span>
                    </div>
                    <p className="Pheading font-krungthep">{t('ThisPortfolio')}</p>
                    <div className="Pcategories">
                      <span>NextJs</span>
                      <span>React</span>
                      <span>i18n</span>
                    </div>
                    <p className="Ptext">{t('ProjetPortfolio')}</p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="/projets">
              <div className=" fadein mt-12 hidden lg:block">
                <div className="Pcard">
                  <div className="Pmain-content">
                    <div className="Pheader">
                      <span>{t('Projetsde')}</span>
                      <span>{t('Mai')} 2024</span>
                    </div>
                    <p className="Pheading font-krungthep">Chief&#39;s Arena</p>
                    <div className="Pcategories">
                      <span>JavaFx</span>
                      <span>UML</span>
                    </div>
                    <p className="PText h-16 max-h-16 text-wrap trucate">
                    {t('ProjetChiefs')}
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="/projets">
              <div className=" fadein mt-12 hidden lg:block">
                <div className="Pcard">
                  <div className="Pmain-content">
                    <div className="Pheader">
                      <span>{t('Projetsd')}</span>
                      <span>{t('Octobre')}-{t('Janvier')} 2025</span>
                    </div>
                    <p className="Pheading font-krungthep">{t('PEtu')}</p>
                    <div className="Pcategories">
                      <span>NextJs</span>
                      <span>React</span>
                      <span>Django</span>
                      <span>BPMN</span>
                    </div>
                    <p className="PText">{t('ProjetEtu')}</p>
                  </div>
                </div>
              </div>
              </Link>
            </nav>  
            <nav className="">
            <Link href="/projets">
              <button className=" fadein btnVP md:mr-32">
                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="sparkleVP">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                </svg>
                <span className="textVP">{t('Voir')}</span>
              </button>
            </Link>
            </nav>
              
          </div>       
        </section>

        <div className=" w-full h-[0.4vh] bg-[#2c2c2c]"></div>

        <section className=" w-full md:min-h-[100vh] flex flex-col md:flex-row justify-start items-center py-3 md:pr-3 mb-7">
          <div className=" self-start ml-5 md:-rotate-90 md:-ml-10 md:self-center">
            <h2 className="font-krungthep text-4xl">{t('Contact')}</h2>
          </div>
          <div className=" flex flex-col md:pr-36 gap-8 md:pt-8 justify-center items-center w-full h-full">
            <h3 className=" fadein text-4xl hidden md:block">{t('ContactMe')}</h3>
            <form onSubmit={handleSubmit} className="fadein form-contact flex flex-col gap-1 w-[95vw] md:w-[45vw]">
              <label>{t('Genre')}</label>
              <div className="flex justify-evenly items-center mb-2 form-contact-select">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="genre"
                    id="homme"
                    checked={formData.genre === "homme"}
                    onChange={handleChange}
                  />
                  <label htmlFor="homme">{t('M')}</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="genre"
                    id="femme"
                    checked={formData.genre === "femme"}
                    onChange={handleChange}
                  />
                  <label htmlFor="femme">{t('Mme')}</label>
                </div>
              </div>
              <label htmlFor="name">{t('Nom')}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mb-2"
                placeholder={t('VotreNom')}
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="entreprise">{t('Ent')}</label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                className="mb-2"
                placeholder={t('VotreEnt')}
                value={formData.entreprise}
                onChange={handleChange}
              />
              <label htmlFor="email">{t('Mail')}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mb-2"
                placeholder={t('VotreMail')}
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message">{t('Mess')}</label>
              <textarea
                id="message"
                name="message"
                className="h-28 mb-2"
                placeholder={t('VotreMess')}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button className="form-contact-submit-btn hover:duration-700 mx-auto" type="submit">
                {t('Envoyer')}
              </button>
            </form>
          </div>

        </section>
        
        
      </main>
    </>
  }
  
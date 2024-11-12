"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "use-intl";

interface FormData {
  genre: string;
  name: string;
  entreprise: string;
  email: string;
  message: string;
}

export default function Contact(){
  const t = useTranslations("Contact");

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
        <main className=" font-chakrapetch flex flex-col gap-8 py-8 justify-center items-center md:items-center w-full h-full p-3">
            <h1 className=" fadein text-4xl self-center  font-krungthep ">{t('ContactMe')}</h1>
            <div className=" fadein w-[35%] h-[0.4vh] bg-[#2c2c2c]"></div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 self-center">
              <a href="mailto:hugo.barbieri@etu.univ-grenoble-alpes.fr" target="_blank" className=" rounded-lg hover:bg-gradient-to-r from-[#E6007E] to-[#67348B]">
                <div className=" fadein px-7 py-5 rounded-lg border-2 border-[#2c2c2c] text-center flex items-center gap-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-7 fill-[#67348B]">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                  <p>hugo.barbieri@etu.univ-grenoble-alpes.fr</p>
                </div>
              </a>
              <a href="tel:+33627355061" target="_blank" className=" rounded-lg hover:bg-gradient-to-r from-[#E6007E] to-[#67348B]">
                <div className=" fadein px-7 py-5 rounded-lg border-2 border-[#2c2c2c] text-center flex items-center gap-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" size-7 fill-[#67348B]">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                  </svg>
                  <p>06.27.35.50.61</p>
               </div>
              </a>
              <a href="https://maps.app.goo.gl/xsP32AUyCZpxn4oo9" target="_blank" className=" rounded-lg hover:bg-gradient-to-r from-[#E6007E] to-[#67348B]">
                <div className=" fadein px-7 py-5 rounded-lg border-2 border-[#2c2c2c] text-center flex items-center gap-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className=" size-7 fill-[#67348B]">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
                  <p>IUT2 - UGA</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/hugo-barbieri-9b37982a1/" target="_blank" className=" rounded-lg hover:bg-gradient-to-r from-[#E6007E] to-[#67348B]">
                <div className=" fadein px-7 py-5 rounded-lg border-2 border-[#2c2c2c] text-center flex items-center gap-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=" size-7 fill-[#67348B]">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
                  <p>{t('MyLinkedin')}</p>
                </div>
              </a>
            </div>
            <div className=" fadein w-[35%] h-[0.4vh] bg-[#2c2c2c]"></div>
            <form onSubmit={handleSubmit} className="fadein form-contact flex flex-col gap-1 w-full md:w-[45vw]">
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
          </main>
    </>
}
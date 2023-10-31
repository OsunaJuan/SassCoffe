import React from 'react'
import './index.css'
import ScrollAnimation from 'react-animate-on-scroll';

import { useProductProvider } from '../../CONTEXT'
import {HomeCards} from '../../COMPONENTS/HomeCards'
import { Footer } from '../../COMPONENTS/Footer';
import { ProductCard } from '../../COMPONENTS/ProductCard'
import { CheckoutSideMenu } from '../../COMPONENTS/CheckoutSideMenu';
import { ProductDetail } from '../../COMPONENTS/ProductDetail';

import heroVid from '../../resources/Home/hero-vid-comprpes.mp4'
import AgricultureImg from '../../resources/Home/agri.jpg'
import QualiyImg from '../../resources/Home/quality.jpg'
import VarietyImg from '../../resources/Home/variedad.jpg'


function Home() {

  const {Products} = useProductProvider()

  const bestSellers = [Products[2],Products[7],Products[4]]  

  const homeCardsInfo =[
    {text:"Ayudando a plantaciones locales",imgURL:AgricultureImg},
    {text:"Con los mas altos estandares de calidad",imgURL:QualiyImg},
    {text:"Variedades seleccionadas de todo el mundo",imgURL:VarietyImg}
  ]

  return (
    <div className="flex flex-col w-full h-auto">

      <figure className="fixed top-0 right-0">
        <video autoPlay muted loop>
          <source src={heroVid} />
        </video>
      </figure>

      <section>
        <div className=" flex justify-start items-center w-full h-screen relative z-20">
          <div className="flex flex-col h-1/3 ml-80">
            <p className="text-white text-7xl">Conoce nuestros cafes</p>
            <button className="text-white">ir</button>
          </div>
        </div>
      </section>

      <section className=" flex justify-center w-full z-20 bg-white">
        <div className="relative w-4/5 py-16">
          {homeCardsInfo.map((item, index) => (
            <HomeCards
              text={item.text}
              imgURL={item.imgURL}
              i={index}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className=" flex flex-col justify-center items-center w-full h-auto z-20 p-20 bg-white">
        <h2 className=" text-black text-6xl font-extrabold mb-36">
          Nuestros productos mas vendidos
        </h2>
        <div className="flex justify-around items-center h-full w-4/5 ">
          {bestSellers.map((item, i) => (
            <ScrollAnimation
              className=" w-3/12"
              animateIn={"animate__zoomIn"}
              delay={50}
              animateOnce={true}
              key={i}
            >
              <div className="sombra">
                <ProductCard product={item} />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <Footer/>

      <CheckoutSideMenu />

      <ProductDetail />

    </div>
  );
}

export  {Home}
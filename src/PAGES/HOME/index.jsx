import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './index.css'
import ScrollAnimation from 'react-animate-on-scroll';

import { useProductProvider } from '../../CONTEXT'
import {HomeCards} from '../../COMPONENTS/HomeCards'
import { ProductCard } from '../../COMPONENTS/ProductCard'
import { CheckoutSideMenu } from '../../COMPONENTS/CheckoutSideMenu'
import { ProductDetail } from '../../COMPONENTS/ProductDetail'

import heroVid from '../../resources/Home/hero-vid-comprpes.mp4'
import heroImgMobile from '../../resources/Home/hero-mobile.jpg'
import AgricultureImg from '../../resources/Home/agri.jpg'
import QualiyImg from '../../resources/Home/quality.jpg'
import VarietyImg from '../../resources/Home/variedad.jpg'


function Home() {

  const {Products} = useProductProvider()

  const bestSellers = [Products[2],Products[7],Products[4]]  

  const homeCardsInfo =[
    {text:"Respaldamos a quienes cultivan con pasión",imgURL:AgricultureImg},
    {text:"Saboreamos la excelencia en cada taza",imgURL:QualiyImg},
    {text:"Descubrimos nuevos horizontes con cada sorbo",imgURL:VarietyImg}
  ]

  return (
    <div className="flex flex-col w-full h-auto">

      <figure className="fixed top-0 right-0">
        <video autoPlay muted loop className=' hidden md:block '>
          <source src={heroVid} />
        </video>
        <img  className='md:hidden' src={heroImgMobile}/>

      </figure>

      <section id='hero'>
        <div className=" flex justify-start items-center w-full h-screen relative z-20">
          <div className="flex flex-col h-1/3 w-11/12 m-auto md:ml-[10%] md:w-auto">
            <h1 className=" pb-20 text-white text-7xl md:text-8xl font-black text-center md:text-left">Calidad, cosechada en granos.</h1>
            <HashLink to="/#HomeInfo" className="w-10/12 md:w-5/12 m-auto md:m-0 rounded-none text-white text-4xl font-bold">
              <div className='GlassButton p-1 md:p-4 rounded-lg md:hover:bg-white md:hover:text-black text-center  '>
                Probá nuestros cafés:
              </div>              
            </HashLink>
          </div>
        </div>
      </section>

      <section id='HomeInfo' className=" flex justify-center w-full z-20 bg-white">
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
              <div>
                <ProductCard product={item} />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>


      <CheckoutSideMenu />

      <ProductDetail />

    </div>
  );
}

export  {Home}
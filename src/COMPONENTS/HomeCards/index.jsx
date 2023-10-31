import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function HomeCards({text,imgURL, i}) {

    const animation = i%2 == 0? "animate__fadeInLeft" : 'animate__fadeInRight'
  return (
    <ScrollAnimation animateIn= {animation} delay={50} animateOnce={true}>
      <div className={`relative flex ${i%2 == 0? "flex-row" : "flex-row-reverse"} justify-between w-full my-6 z-20 sombra`}>
        <div className={`absolute top-0 bottom-0 left-0 right-0 z-30 ${i%2==0? "gradiente" : "gradiente_inverso" }`}></div>
        <div className=" flex justify-center items-center p-20 w-1/2 z-40">
          <p className=" text-white text-6xl">{text}</p>
        </div>
        <figure className="flex justify-end w-1/2 z-20">
          <img src={imgURL} alt="" className="w-full" />
        </figure>
      </div>
    </ScrollAnimation>
  );
}

export  {HomeCards}
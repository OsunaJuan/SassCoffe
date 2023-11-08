import Coffe1 from '../resources/Coffe-img-1.png'
import Coffe2 from '../resources/Coffe-img-2.png'
import Coffe3 from '../resources/Coffe-img-3.png'
import Coffe4 from '../resources/Coffe-img-4.png'
import Coffe5 from '../resources/Coffe-img-5.png'
import Coffe6 from '../resources/Coffe-img-6.png'
import pods1 from '../resources/Pods-img-1.png'
import pods2 from '../resources/Pods-img-2.png'
import pods3 from '../resources/Pods-img-3.png'
import pods4 from '../resources/Pods-img-4.png'
import pods5 from '../resources/Pods-img-5.png'
import pods6 from '../resources/Pods-img-6.png'

const imgRoute = {
    coffeImg1: Coffe1,
    coffeImg2: Coffe2,
    coffeImg3: Coffe3,
    coffeImg4: Coffe4,
    coffeImg5: Coffe5,
    coffeImg6: Coffe6,
    PodsImg1: pods1,
    PodsImg2: pods2,
    PodsImg3: pods3,
    PodsImg4: pods4,
    PodsImg5: pods5,
    PodsImg6: pods6,
}

const Products = [
    {
        id:1,
        category: "Coffe Beans",
        tittle: "Cafe Colombia Guanes",
        description: " El Café Colombia Guanes es una variedad de café originaria de Colombia, específicamente de la región de Guanes. Se caracteriza por su suavidad y acidez equilibrada, con notas de cítricos y frutos secos en su sabor. ",
        price: 630,
        imgURL : imgRoute.coffeImg1 
    },
    {
        id:2,
        category: "Coffe Beans",
        tittle: "Cafe Etiopia",
        description: "El Café Etiopía es uno de los cafés más reconocidos a nivel mundial. Proveniente de Etiopía, cuna del café, se distingue por su sabor vibrante y complejo, con notas florales, afrutadas y a menudo un toque de acidez.",
        price: 700,
        imgURL : imgRoute.coffeImg2 
    },
    {
        id:3,
        category: "Coffe Beans",
        tittle: "Cafe Guatemala",
        description: "El Café Guatemala se cultiva en las fértiles tierras de Guatemala, ofreciendo una taza con cuerpo medio, acidez brillante y notas de chocolate, nueces y frutas, lo que lo convierte en una opción deliciosa para los amantes del café.",
        price: 650,
        imgURL : imgRoute.coffeImg3 
    },
    {
        id:4,
        category: "Coffe Beans",
        tittle: "Cafe Brasil Bourbon",
        description: "El Café Brasil Bourbon es una variedad de café cultivada en Brasil, conocida por su cuerpo completo y sabores suaves. Se caracteriza por sus notas a nueces y caramelo, con un toque de dulzura y acidez moderada.",
        price: 520,
        imgURL : imgRoute.coffeImg4 
    },
    {
        id:5,
        category: "Coffe Beans",
        tittle: "Cafe Blend Brasil Colombia",
        description: "Este café es una mezcla de granos de café de Brasil y Colombia. Ofrece una experiencia única con un equilibrio entre la suavidad del café brasileño y la acidez brillante de los granos colombianos. Puedes esperar sabores variados, desde notas de chocolate hasta cítricos.",
        price: 450,
        imgURL : imgRoute.coffeImg5 
    },
    {
        id:6,
        category: "Coffe Beans",
        tittle: "Cafe Brasil Catuai",
        description: "El Café Brasil Catuai proviene de Brasil y se distingue por su perfil de sabor suave y afrutado. Los granos Catuai a menudo presentan notas de frutas tropicales y un cuerpo ligero, creando una experiencia de café refrescante y agradable.",
        price: 550,
        imgURL : imgRoute.coffeImg6 
    },
    {
        id:7,
        category: "Coffe Pods",
        tittle: "Capsulas Caffetino",
        description: "Disfruta de una experiencia de café rica y equilibrada con nuestras cápsulas Caffetino. Perfectas para los amantes del café clásico.",
        price: 610,
        imgURL : imgRoute.PodsImg1
    },
    {
        id:8,
        category: "Coffe Pods",
        tittle: "Capsulas Caffetino dolce",
        description: "Sumérgete en un mundo de suavidad y dulzura con las cápsulas Caffetino Dolce. Un café delicado para los paladares más refinados.",
        price: 650,
        imgURL : imgRoute.PodsImg2 
    },
    {
        id:9,
        category: "Coffe Pods",
        tittle: "Capsulas Cafe Oreiras",
        description: "Déjate llevar por el sabor auténtico de nuestras cápsulas Café Oreiras. Un café con carácter que te transportará.",
        price: 620,
        imgURL : imgRoute.PodsImg3 
    },
    {
        id:10,
        category: "Coffe Pods",
        tittle: "Capsulas Cafe Colombia",
        description: "Disfruta de la riqueza y la intensidad de un café colombiano de alta calidad con nuestras cápsulas Café Colombia.",
        price: 590,
        imgURL : imgRoute.PodsImg4 
    },
    {
        id:11,
        category: "Coffe Pods",
        tittle: "Capsulas Cafe Brasil",
        description: "Embárcate en un viaje sensorial con nuestras cápsulas Café Brasil. Un café lleno de vida y energía, como el país mismo.",
        price: 600,
        imgURL : imgRoute.PodsImg5 
    },
    {
        id:12,
        category: "Coffe Pods",
        tittle: "Capsulas Cafe Etiopia",
        description: "Descubre la esencia de África en cada sorbo con nuestras cápsulas Café Etiopía. Un café con notas únicas y un carácter inigualable.",
        price: 630,
        imgURL : imgRoute.PodsImg6
    }
    
]

export {Products}


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
}

const Products = [
    {
        id:1,
        category: "Coffe Beans",
        tittle: "Cafe Colombia Guanes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 630,
        imgURL : imgRoute.coffeImg1 
    },
    {
        id:2,
        category: "Coffe Beans",
        tittle: "Cafe Etiopia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 700,
        imgURL : imgRoute.coffeImg2 
    },
    {
        id:3,
        category: "Coffe Beans",
        tittle: "Cafe Guatemala",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 650,
        imgURL : imgRoute.coffeImg3 
    },
    {
        id:4,
        category: "Coffe Beans",
        tittle: "Cafe Brasil Bourbon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 520,
        imgURL : imgRoute.coffeImg4 
    },
    {
        id:5,
        category: "Coffe Beans",
        tittle: "Cafe Blend Brasil Colombia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 450,
        imgURL : imgRoute.coffeImg5 
    },
    {
        id:6,
        category: "Coffe Beans",
        tittle: "Cafe Brasil Catuai",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 550,
        imgURL : imgRoute.coffeImg6 
    },
    {
        id:7,
        category: "Coffe Pods",
        tittle: "Capsulas Caffetino",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 610,
        imgURL : imgRoute.PodsImg1
    },
    {
        id:8,
        category: "Coffe Pods",
        tittle: "Capsulas Caffetino dolce",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 650,
        imgURL : imgRoute.PodsImg2 
    },
    {
        id:9,
        category: "Coffe Pods",
        tittle: "Capsulas Cafe Oreiras",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 620,
        imgURL : imgRoute.PodsImg3 
    },
    {
        id:10,
        category: "Coffe Pods",
        tittle: "Capsulas Cafe Colombia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 590,
        imgURL : imgRoute.PodsImg4 
    },
    {
        id:11,
        category: "Coffe Pods",
        tittle: "Capsulas Cafe Brasil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        price: 600,
        imgURL : imgRoute.PodsImg5 
    }
    
]

export {Products}
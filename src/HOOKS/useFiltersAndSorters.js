
const useFiltersAndSorters = () => {

    const SorterByPrice = (array,mode) => {
        //si {mode} es 0, no se sortea. si es 1 se sortea de forma ascendente. si es 2, descendiente.
        const newArray = [...array]
        
        if(mode == 1){

            newArray.sort((a,b)=>a.price-b.price)
            return newArray

        }else if(mode == 2){

            newArray.sort((a,b)=>a.price-b.price)
            const reversedArray = newArray.reverse()
            return reversedArray

        }

        return newArray
    }

    const filterByCategory = (array,category) =>{

        if(!category) return array

        const newArray = [...array]
        const sortedArray = newArray.filter(item => item.category === category)
        return sortedArray

    }

    return [SorterByPrice,filterByCategory]

}

export {useFiltersAndSorters}
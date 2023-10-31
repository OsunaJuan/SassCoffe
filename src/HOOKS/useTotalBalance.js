
const useTotalBalance = ()=>{

    const calcTotalBalance = (array)=>{
        let total = array.reduce((total,item)=>{
                        return total + (item.uniqueProduct.price * item.quantity)
                    },0)       
    
        return total
    }

    return calcTotalBalance
}

export {useTotalBalance}  


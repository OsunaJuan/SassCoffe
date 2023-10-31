

//Funcion usada para buscar un objeto dentro de un array de productos:
// params: Array:  Array de productos | itemToSearch: objeto que contiene la información del producto.

const useCart = ()=>{

    const findItem = (array,itemToSearch) =>{
        if(array.find(item=>item.uniqueProduct.tittle == itemToSearch.tittle)){
            let targetItem
            array.forEach((item, itemIndex) => {
                if(item.uniqueProduct.tittle === itemToSearch.tittle){
                    targetItem = {item,itemIndex}
                }
            })

            return targetItem
        }
        else{
            return false
        }
    }
    
    //Funcion usada para incrementar o en su defecto añadir un nuevo item al array.
    
    const addItem = (item,PrevState,settingFun)=>{
        if(findItem(PrevState,item)){   
            const newState  = [...PrevState]
            const matchItemIndex = findItem(PrevState,item).itemIndex
            newState[matchItemIndex].quantity = newState[matchItemIndex].quantity + 1
            settingFun(newState)
        }
        else{
            const newItemToAdd = 
            {
                uniqueProduct: item,
                quantity: 1
            }
            const newState = [...PrevState, newItemToAdd]
            settingFun(newState)
        }
        
    }
    
    //Funcion que decrementa las cantidades de un item en un array, en caso de que esta nueva cantidad sea 0, lo elimina
    
    const decItem = (item,PrevState,settingFun)=>{
        const newState = [...PrevState]
        const matchItemIndex = findItem(PrevState,item).itemIndex
        newState[matchItemIndex].quantity = newState[matchItemIndex].quantity - 1
        if(newState[matchItemIndex].quantity == 0){
            newState.splice(findItem(PrevState,item).itemIndex,1)
        }
        settingFun(newState)
    }
    
    //funcion usada para eliminar items de un array
    
    const delItem = (item,PrevState,settingFun)=>{
        const newState = [...PrevState]
        newState.splice(findItem(PrevState,item).matchIndex,1)
        settingFun(newState)
    }
    return [addItem,decItem,delItem]
}




export {useCart}



// const modifyCart = (newItem,mode,arr,setArr)=>{
//     console.log(newItem,arr,setArr)
//     if(arr.find(item=>item.uniqueProduct.tittle === newItem.tittle)){
//         const matchIndex = arr.findIndex(item=>item.uniqueProduct.tittle === newItem.tittle)
//         const newState = [...arr]
//         // if(mode== "ADD"){
//         //     newState[matchIndex].quantity = newState[matchIndex].quantity + 1
//         //     calcTotalBalance(newState)
//         // }else if(mode == "DEC"){
//         //     newState[matchIndex].quantity = newState[matchIndex].quantity - 1
//         //     calcTotalBalance(newState)
//         //     if(newState[matchIndex].quantity == 0){
//         //         newState.splice(matchIndex,1)
//         //         calcTotalBalance(newState)
//         //     }
//         }else if(mode=="DEL"){
//             newState.splice(matchIndex,1)
//             calcTotalBalance(newState)
//         }

//         setArr(newState)
//         calcTotalBalance(newState)
//     // }else{
//     //     const newState = [...arr]
//     //     newState.push({
//     //         uniqueProduct: newItem,
//     //         quantity: 1
//     //     })
//         setArr(newState)
//         calcTotalBalance(newState)
//     }
// }
const useLocalStorage = ()=>{
    const setLocalStorage = (key,value)=>{
        let JSONvalue = JSON.stringify(value)
        localStorage.setItem(key, JSONvalue)
    }

    const getLocalStorage = (key,defaultProp) =>{
        let localStorageValue = localStorage.getItem(key)
        return localStorageValue? JSON.parse(localStorageValue) : defaultProp
    }

    return [setLocalStorage, getLocalStorage]


}

export {useLocalStorage}
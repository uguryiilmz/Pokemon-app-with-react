const POKEMON_CACHE="POKEMON_CACHE"
const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14

const currentTime=()=>{
    return Date.now()
}

const getPokemonCache=()=>{

    let pokemonCache={
        data:{},
        nextCleanup:new Date().getTime()+TWO_WEEKS
    }  

    try {
        const data=localStorage.getItem(POKEMON_CACHE)

        if(data){
            pokemonCache=JSON.parse(data)
        }
    }
    catch(e){
        console.error(e.message)
    }

    return pokemonCache
}

const setPokemonToCache=(userId,value)=>{

    const pokemonCache=getPokemonCache()
    const data=pokemonCache.data

    cleanUpStorage(data)


    // const item={
    //     id:userId,
    //     expiry:new Date().getTime()+TWO_WEEKS,
    //     pokemon:value
    // }

    // data[userId]=item

    // try{
    //     localStorage.setItem(POKEMON_CACHE,JSON.stringify(pokemonCache))
    // }
    // catch(e){
    //     cleanUpStorage(data)
    // }

}

const cleanUpStorage=(data)=>{

    let isDeleted
    let oldest
    let oldestKey


    //if 30 days have been passed, it removes the cache
    for (const key in data) {
        console.log("key is",key)
        const expiry = data[key].expiry
        if (expiry && expiry-TWO_WEEKS <=currentTime()) {
          console.log("girdi iceri",expiry-TWO_WEEKS,currentTime())
          delete data[key]
          isDeleted = true
        }
    
        //finding the oldest cache in case none of them are expired
        if (!oldest || oldest > expiry) {
          oldest = expiry
          oldestKey=key
        }
    }

    //remove the oldest cache if there is no more space in local storage (5 MB)
    if(!isDeleted && oldestKey){
        delete data[oldestKey]
    }

    localStorage.setItem(
        POKEMON_CACHE,
        JSON.stringify({
          data: data,
          nextCleanup:currentTime() + TWO_WEEKS,
        })
    )

}

export {setPokemonToCache,getPokemonCache}
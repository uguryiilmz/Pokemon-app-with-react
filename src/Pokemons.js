import React, { useEffect, useState, useRef} from "react";
import Pokemon from './Pokemon'
import './Pokemon.css'
import {getPokemonCache,setPokemonToCache} from './PokemonCache'

const Pokemons=(props)=>{
    const [pokemon,setPokemon]=useState("")
    const {userId,pokemons}=props


    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
    }

    const prevUser=usePrevious(userId)

    useEffect(()=>{
        if(prevUser!==userId){
            setPokemon('')
        }
        const cache=getPokemonCache("POKEMON_CACHE")
        if(userId in cache.data){
            setPokemon(cache.data[userId].pokemon)
        }
        
    },[userId,pokemons])

    const handleChange=(e)=>{
        setPokemonToCache(userId,e.target.value)
        setPokemon(e.target.value)
    }

    return(
        <div className="pokemonWrapper">
            <h2>Welcome to pokemon world</h2>
            <p>Choose your pokemon </p>
            <select id = "dropdown" onChange={handleChange} value={pokemon} >
                {pokemons.map((pokemon,index)=>{
                    return(
                        <option key={index} value={pokemon}>{pokemon}</option>
                    )
                })}
            </select>
            {pokemon!=="" ? <Pokemon pokemon={pokemon}/>: null}
        </div>
    )
}

export default Pokemons
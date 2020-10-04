import React, { useEffect, useState } from "react";

const Pokemon=(props)=>{
    const [pokemonDetails,setPokemonDetails]=useState('')
    useEffect(()=>{
        async function fetchPokemons(){
            try{
                let res=await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
                let pokemon_data=await res.json()
                setPokemonDetails(pokemon_data)
            }
            catch(e){
                console.error(e.message)
            }
        }
        fetchPokemons()
    },[props.pokemon])

    if(pokemonDetails===''){
        return null
    }


    return(

        <div>
            <h2>{pokemonDetails.name}</h2>
            <img src={pokemonDetails.sprites.front_default}/>
            <div>
                <h3>Skills</h3>
                {pokemonDetails && pokemonDetails.abilities.map((a,index)=>{
                    return(
                        <p key={index}>{a.ability.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon
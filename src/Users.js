import React, { useEffect, useState, useRef } from "react";
import './Users.css'
import Pokemons from './Pokemons'
import {getPokemonCache,setPokemonToCache} from './PokemonCache'

const Users=(props)=>{
    const [suggestions,setSuggestions]=useState([])
    const [text,setText]=useState('')
    const [display,setDisplay]=useState(false)
    const [pokemons,setPokemons]=useState([])
    const [userId,setUserId]=useState('')



    const selectSuggestion=(user)=>{

        setUserId(user.id)
        setText(user.name)
        setDisplay(true)
        setPokemons(user.pokemons)
        setSuggestions([])
    }

    const onTextChange=(e)=>{
        const items=props.users
        console.log("items are",items)
        let suggestions=[]
        const value=e.target.value
        if(value.length>0){
            suggestions=items.filter(item=>((item.name.toLowerCase().indexOf(value)>-1)))
            console.log("suggestions are",suggestions)
        }

        setSuggestions(suggestions)
        setText(value)
    }


    const renderSuggestions=()=>{
        if(suggestions.length===0){
            return null
        }

        return(
            <ul>
                {suggestions.map((user,index) => 
                <li onClick={()=>selectSuggestion(user)}
                key={index} >
                    {user.name}
                </li>
                )}
            </ul>
        )
    }

    const showAll=()=>{
        setSuggestions(props.users)
    }

    
    return(
        <div className="users">
            <div className="wrapper">
                <input onClick={showAll} onChange={onTextChange} placeholder="User search" value={text} type="text"/>
                {renderSuggestions()}
            </div>
            {display ? <Pokemons pokemons={pokemons} userId={userId}/> : null}
        </div>

               
    )

}

export default Users
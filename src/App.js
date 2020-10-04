import React, {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users'

function App() {

  const users=[
    { 
      "id":"1",
      "name":"Ugur",
      "pokemons":["pikachu","charmander","bulbasaur"],
    },
    {
      "id":"2",
      "name":"Stephen",
      "pokemons":["charmeleon","charizard","squirtle"],
    },
    {
      "id":"3",
      "name":"Leonard",
      "pokemons":["wartortle","blastoise","caterpie"],
    },
    {
      "id":"4",
      "name":"Draymond",
      "pokemons":["metapod","butterfree","weedle"],
    },
    {
      "id":"5",
      "name":"Johnny",
      "pokemons":["kakuna","beedrill","pidgey"],
    },
    {
      "id":"6",
      "name":"LaRusso",
      "pokemons":["pidgeotto","pidgeot","rattata"],
    },
    {
      "id":"7",
      "name":"Miguel",
      "pokemons":["pikachu","sandslash","ekans"],
    }
  ]


  // useEffect(()=>{
  //   async function fetchPokemons(){
  //     const arr=[]
  //     for(let i=0;i<30;i++){
  //       try{
  //         let p1=await fetch(`https://pokeapi.co/api/v2/pokemon-form/${i+1}`)
          
  //         let p2=await p1.json()
  //         arr.push(p2)
  //       }
  //       catch(e){
  //         console.error(e.message)
  //       }
  //     }
  //     setPokemons(arr)
  //   }

  //   fetchPokemons()

  // },[])


  return (
    <div className="app">
      <Users users={users}/>
    </div>
  );
}

export default App;

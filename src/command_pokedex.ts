import type { State } from "./state.js";

export async function commandPokedex( state: State): Promise<void> {
  
  const pokemons = Object.keys(state.pokedex)
  if(pokemons.length === 0){
    console.log("you have not caught any pokemon")
    return
  }
  console.log(`Your Pokedex:`)

  pokemons.forEach( (poke) => {
    console.log(` - ${poke}`)
  })

  
}
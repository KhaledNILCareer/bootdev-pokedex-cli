import type { State } from "./state.js";

export async function commandExplore(state: State, ...arg: string[]) {
  const area = arg[0]

  if(!area){
    console.log("please enter a valid location")
    return
  }
  
  console.log(`Exploring ${area}...`)
  const exploredLocation = await state.pokeAPI.fetchLocation(area)
  const pokemonEncounters = exploredLocation.pokemon_encounters

  console.log("Found Pokemon:")
  
  pokemonEncounters.forEach((encounter)=> {
    console.log(` - ${encounter.pokemon.name}`)
  })

}

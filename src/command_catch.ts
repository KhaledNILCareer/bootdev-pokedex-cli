import type { State } from "./state.js";

export async function commandCatch(state: State, ...arg: string[]) {
  const pokemonName = arg[0]

  if(!pokemonName){
    console.log("Please enter a Pokemon name.")
    return
  }
  
  console.log(`Throwing a Pokeball at ${pokemonName}...`)

  const fetchedPokemon = await state.pokeAPI.fetchPokemon(pokemonName)

  const catchChance = Math.min(
    1,
    50 / fetchedPokemon.base_experience
  );

  if (Math.random() < catchChance) {
    state.pokedex[fetchedPokemon.name] = fetchedPokemon;
    console.log(`${fetchedPokemon.name} was caught!`)
  } else {
    console.log(`${fetchedPokemon.name} escaped!`)
  }
}



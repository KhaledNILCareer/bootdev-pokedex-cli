import type { State } from "./state.js";

export async function commandMap(state: State) {
  const locations = await state.pokeAPI.fetchLocations(
    state.nextLocationsURL ?? undefined
  );
  locations.results.forEach((location) => {
    console.log(location.name);
  });
  state.nextLocationsURL = locations.next
  state.prevLocationsURL = locations.previous
}

export async function commandMapBack(state: State) {
  if(state.prevLocationsURL === null){
    console.log("you're on the first page")
    return
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  locations.results.forEach((location) => {
    console.log(location.name);
  });
  state.nextLocationsURL = locations.next
  state.prevLocationsURL = locations.previous
}
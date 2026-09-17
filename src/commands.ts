import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map:{
      name: "map",
      description: "Displays the next 20 location areas",
      callback: commandMap
    },
    mapb: {
    name: "mapb",
    description: "Displays the previous 20 location areas",
    callback: commandMapBack,
  },
  explore: {
    name: "explore",
    description: "Explore a location area",
    callback: commandExplore,
  },
  catch: {
    name: "catch",
    description: "catch a pokemon",
    callback: commandCatch,
  },
  inspect: {
    name: "inspect",
    description: "inspect a pokemon",
    callback: commandInspect,
  },
  pokedex: {
    name: "pokedex",
    description: "Show all caught pokemons",
    callback: commandPokedex,
  },
  };
}

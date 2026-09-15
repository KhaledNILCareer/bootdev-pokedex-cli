import { createInterface } from "node:readline";  
import { getCommands } from "./command.js";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (input) => {
    

    const words = cleanInput(input);
    const commands = getCommands();
    const command = commands[words[0]];
    if(command){
      try {
        command.callback(commands)
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Unknown command");
    }
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {

  return input.trim().toLowerCase().split(/\s+/)
}


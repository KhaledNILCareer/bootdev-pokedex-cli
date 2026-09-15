import { createInterface } from "node:readline";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (i) => {
    if(i.length > 0){
      console.log(`Your command was: ${cleanInput(i)[0]}`)
    }
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {

  return input.trim().toLowerCase().split(/\s+/)
}
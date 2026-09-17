# Pokédex CLI

A command-line Pokédex application built with **TypeScript** and **Node.js** using the [PokéAPI](https://pokeapi.co/).

The project provides an interactive REPL where users can explore Pokémon locations, encounter and catch Pokémon, inspect caught Pokémon, and maintain an in-memory Pokédex.

This project was built as part of the **Build a Pokédex in TypeScript** guided project on [Boot.dev](https://www.boot.dev/), with the implementation completed incrementally while practicing TypeScript, Node.js, HTTP APIs, application state, and caching.

## Features

- Interactive command-line REPL
- Command registry for dispatching CLI commands
- Browse PokéAPI location areas with forward and backward pagination
- Explore location areas and discover Pokémon encounters
- Catch Pokémon using a probability based on their base experience
- Store caught Pokémon in an in-memory Pokédex
- Inspect details of previously caught Pokémon
- List all caught Pokémon
- Cache PokéAPI responses to reduce unnecessary network requests
- Automatically remove expired cache entries
- Handle invalid and unknown commands
- Unit tests using Vitest

## Available Commands

| Command | Description |
| --- | --- |
| `help` | Display all available commands |
| `map` | Display the next 20 location areas |
| `mapb` | Display the previous 20 location areas |
| `explore <area>` | Explore a location area and list Pokémon found there |
| `catch <pokemon>` | Attempt to catch a Pokémon |
| `inspect <pokemon>` | Display details about a caught Pokémon |
| `pokedex` | List all caught Pokémon |
| `exit` | Exit the application |

## Example

```text
Pokedex > explore canalave-city-area
Exploring canalave-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - staryu
 - magikarp
 ...

Pokedex > catch pidgey
Throwing a Pokeball at pidgey...
pidgey was caught!

Pokedex > inspect pidgey
Name: pidgey
Height: 3
Weight: 18
Stats:
  -hp: 40
  -attack: 45
  -defense: 40
  -special-attack: 35
  -special-defense: 35
  -speed: 56
Types:
  - normal
  - flying

Pokedex > pokedex
Your Pokedex:
 - pidgey
```

## How It Works

The application runs as an interactive **REPL (Read-Eval-Print Loop)**.

User input is cleaned and parsed into a command name and arguments. Commands are resolved through a command registry and executed using shared application state.

The shared state keeps track of:

- The readline interface
- Available CLI commands
- The PokéAPI client
- Pagination URLs
- Caught Pokémon

PokéAPI requests are handled through a dedicated API client.

A generic in-memory cache stores API responses using request URLs as keys. Cached responses are reused when possible, while a periodic reaping process removes expired entries.

Caught Pokémon are stored in application state, allowing commands such as `inspect` and `pokedex` to access them without making additional API requests.

## Tech Stack

- **TypeScript**
- **Node.js**
- **PokéAPI**
- **Vitest**
- Node.js `readline`
- Native `fetch`
- JavaScript `Map`

## Project Structure

```text
src/
├── main.ts
├── repl.ts
├── repl.test.ts
├── state.ts
├── commands.ts
├── pokeapi.ts
├── pokecache.ts
├── pokecache.test.ts
├── command_help.ts
├── command_exit.ts
├── command_map.ts
├── command_explore.ts
├── command_catch.ts
├── command_inspect.ts
└── command_pokedex.ts
```

## Getting Started

### Prerequisites

The project includes an `.nvmrc` file for the Node.js version used during development.

If you use NVM:

```bash
nvm use
```

Install the dependencies:

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

You should then see:

```text
Pokedex >
```

Type:

```text
help
```

to see the available commands.

## Testing

Run the test suite with:

```bash
npm test
```

Build the TypeScript project with:

```bash
npm run build
```

## Learning Context

This repository was created while completing Boot.dev's **Build a Pokédex in TypeScript** guided project.

The project was used as hands-on practice for concepts including:

- Building an interactive REPL with Node.js
- Structuring CLI commands using a command registry
- Managing shared application state
- Working with asynchronous HTTP requests
- Consuming and modeling JSON API responses with TypeScript
- Navigating paginated APIs
- Designing a generic in-memory cache
- Cache expiration and periodic cleanup
- Working with TypeScript generics
- Handling command arguments
- Applying probability with `Math.random()`
- Testing TypeScript code with Vitest

The implementation was developed incrementally alongside the course assignments rather than being presented as an independently designed application.

## API

Pokémon data is provided by the [PokéAPI](https://pokeapi.co/).

## Acknowledgements

- [Boot.dev](https://www.boot.dev/) — project specification and guided learning context
- [PokéAPI](https://pokeapi.co/) — Pokémon data API

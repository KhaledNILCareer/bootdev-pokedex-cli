import { Cache } from "./pokecache.js"

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor() {
    this.cache = new Cache(5 * 60 * 1000);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;

    const cachedData = this.cache.get<ShallowLocations>(url)
    if (cachedData !== undefined) {
      return cachedData;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = (await response.json()) as ShallowLocations;

    this.cache.add<ShallowLocations>(url, data)

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
    
    const cachedData = this.cache.get<Location>(locationURL)
    if (cachedData !== undefined) {
      return cachedData;
    }

    const response = await fetch(locationURL);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = (await response.json()) as Location;
    
    this.cache.add<Location>(locationURL, data)

    return data;
  }
}

export type ShallowLocations = {
  "count": number,
  "next": string | null,
  "previous": string | null,
  "results": {
    "name": string,
    "url": string,
  }[],
};

export type Location = {
  "pokemon_encounters": {
    "pokemon": {
      "name": string,
      "url": string
    }
  }[],
};
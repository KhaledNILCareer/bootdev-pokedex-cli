export type CacheEntry<T> = {
  createdAt: number;
  val: T
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #interval: number;
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop()
  };

  add<T>(key: string, val: T){
    this.#cache.set(key, {
      createdAt: Date.now(),
      val: val
    })
  }

  get<T>(key: string): T | undefined {
    
    const entry = this.#cache.get(key)
    
    if(!entry){
      return undefined
    }
    
    return entry.val
  }

  #reap(){
    for (const [key, entry] of this.#cache) {
      if(entry.createdAt < Date.now() - this.#interval){
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }
  stopReapLoop(){
    if(!this.#reapIntervalId){
      return
    }
    clearInterval(this.#reapIntervalId)
    this.#reapIntervalId = undefined
  }

}

import { test, expect } from "vitest";
import { Cache } from "./pokecache.js";

test("cache stores and removes expired entries", async () => {
  const cache = new Cache(100);

  cache.add("test-key", "test-value");

  expect(cache.get("test-key")).toBe("test-value");

  await new Promise((resolve) => setTimeout(resolve, 250));

  expect(cache.get("test-key")).toBe(undefined);

  cache.stopReapLoop();
});
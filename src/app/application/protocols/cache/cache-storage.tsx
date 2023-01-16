export interface CacheStorage {
  getItem: (name: string) => string | null;
  setItem: (name: string, value: string) => void;
}

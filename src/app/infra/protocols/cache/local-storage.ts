import axios from "axios";
import { CacheStorage } from "@/app/application/protocols";

export class LocalStorage implements CacheStorage {
  getItem(name: string) {
    return localStorage.getItem(name);
  }
  setItem(name: string, value: string) {
    return localStorage.setItem(name, value);
  }
}

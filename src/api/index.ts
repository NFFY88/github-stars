import axios, { AxiosInstance } from "axios";
import { repositoriesApi } from "./domains/repositories";

// TODO: Надо вынести в .env файл
const API_PATH = "https://api.github.com/";

export const APIService: AxiosInstance = axios.create({
  baseURL: API_PATH,
});

export const api = {
  repositories: { ...repositoriesApi },
};

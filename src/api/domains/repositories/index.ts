import { APIService } from "@/api";
import { ENDPOINTS } from "@/api/endpoints";
import { IRepositorieaApi } from "./interfaces";

export const repositoriesApi: IRepositorieaApi = {
  getRepositories: async (params) =>
    APIService.get(ENDPOINTS.repositories, { params }),
};

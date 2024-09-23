import { IBaseResponse } from "@/api/interfaces";
import { IRepository } from "@/interfaces/entities";

export interface IRepositorieaApi {
  getRepositories(
    params: IRepositoriesFilterParams
  ): Promise<IBaseResponse<IGetRepositories>>;
}

export interface IRepositoriesFilterParams {}

export interface IGetRepositories {
  items: IRepository[];
  total_count: number;
}

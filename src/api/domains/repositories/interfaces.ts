import { IBaseResponse } from "@/api/interfaces";
import { IRepository } from "@/interfaces/entities";

export interface IRepositorieaApi {
  getRepositories(
    params: IRepositoriesFilterParams
  ): Promise<IBaseResponse<IGetRepositories>>;
}

export interface IRepositoriesFilterParams {
  readonly q: string;
  sort: "stars" | "forks" | undefined;
  order: "asc" | "desc" | undefined;
}

export interface IGetRepositories {
  items: IRepository[];
  total_count: number;
}

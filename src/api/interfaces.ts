export interface IBaseResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

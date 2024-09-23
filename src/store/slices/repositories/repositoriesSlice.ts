import { IRepositoriesFilterParams } from "@/api/domains/repositories/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { fetchRepositories } from "./repositoriesThunkActions";
import { IRepository } from "@/interfaces/entities";
import { NameSpace } from "@/store/namespace";
import { State } from "@/interfaces/store";

interface IRepositoriesState {
  isLoading: boolean;
  filterParams: IRepositoriesFilterParams;
  repositories: IRepository[];
  totalCount: number;
}

const initialState: IRepositoriesState = {
  isLoading: false,
  filterParams: {
    q: "language:TypeScript",
    sort: "stars",
    order: "desc",
  },
  repositories: [],
  totalCount: 0,
};

export const repositoriesSlice = createSlice({
  name: NameSpace.Repositories,
  initialState,
  reducers: {
    changeFilterParams(state, { payload }) {
      state.filterParams = payload;
    },
    setTotalCount(state, { payload }) {
      state.totalCount = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRepositories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.repositories = payload.items;
      })
      .addCase(fetchRepositories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const repositoriesSelectors = {
  getRepositories: (state: State) => state[NameSpace.Repositories].repositories,
  getIsLoading: (state: State) => state[NameSpace.Repositories].isLoading,
  getFilterParams: (state: State) => state[NameSpace.Repositories].filterParams,
  getTotalCount: (state: State) => state[NameSpace.Repositories].totalCount,
};

export const repositoriesActions = {...repositoriesSlice.actions, fetchRepositories};

export default repositoriesSlice.reducer;

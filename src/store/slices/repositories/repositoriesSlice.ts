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
}

const initialState: IRepositoriesState = {
  isLoading: false,
  filterParams: {},
  repositories: [],
};

export const repositoriesSlice = createSlice({
  name: NameSpace.Repositories,
  initialState,
  reducers: {
    changeFilterParams(state, { payload }) {
      state.filterParams = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRepositories.fulfilled, (state, { payload }) => {
        console.log('payload', payload)
        state.isLoading = false;
        state.filterParams = payload;
        state.repositories = payload.items;
      })
      .addCase(fetchRepositories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const repositoriesSelectors = {
  getRepositories: (state: State) => state[NameSpace.Repositories].repositories,
};

export const repositoriesActions = {...repositoriesSlice.actions, fetchRepositories};

export default repositoriesSlice.reducer;

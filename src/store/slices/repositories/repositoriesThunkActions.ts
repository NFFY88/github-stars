import { NameSpace } from "@/store/namespace";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { repositoriesActions } from "./repositoriesSlice";
import { api } from "@/api";
import {
  IGetRepositories,
  IRepositoriesFilterParams,
} from "@/api/domains/repositories/interfaces";
import { RootState } from "@/store";

export const fetchRepositories = createAsyncThunk<
  IGetRepositories,
  IRepositoriesFilterParams,
  { state: RootState; rejectValue: string }
>(
  `${NameSpace.Repositories}/fetchRepositories`,
  async (params, { rejectWithValue, dispatch }) => {
    try {
      dispatch(repositoriesActions.changeFilterParams(params));

      const response = await api.repositories.getRepositories(params);
      if (response.status === 200) {
        dispatch(repositoriesActions.setTotalCount(response.data.total_count));
        return response.data;
      } else {
        return rejectWithValue("Failed to fetch repositories");
      }
    } catch (error) {
      return rejectWithValue("Failed to fetch repositories");
    }
  }
);

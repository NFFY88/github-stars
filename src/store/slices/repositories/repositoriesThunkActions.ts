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
  // (IBaseRequestParams & { withReset?: boolean }) | undefined
  `${NameSpace.Repositories}/fetchRepositories`,
  async (params, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(repositoriesActions.changeFilterParams(params));

      const response = await api.repositories.getRepositories(params);
      console.log("response", response);
      if (response.status === 200) {
        return response.data;
      } else {
      return rejectWithValue("Failed to fetch contracts");
      }
    } catch (error) {
      return rejectWithValue("Failed to fetch contracts");
    }
  }
);

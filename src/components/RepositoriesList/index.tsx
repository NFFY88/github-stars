import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  repositoriesSelectors,
  repositoriesActions,
} from "@/store/slices/repositories/repositoriesSlice";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { DataGrid, GridSortModel } from "@mui/x-data-grid";
import { useCallback, useEffect, useMemo } from "react";
import { repositoriesColumns } from "./columns";

const CustomTableWrapper = styled(Box)({
  height: "calc(100vh - 100px)",
  width: "100%",
});

const RepositoriesList = () => {
  const dispatch = useAppDispatch();
  const repositories = useAppSelector(repositoriesSelectors.getRepositories);
  const isLoading = useAppSelector(repositoriesSelectors.getIsLoading);
  const filterParams = useAppSelector(repositoriesSelectors.getFilterParams);
  const totalCount = useAppSelector(repositoriesSelectors.getTotalCount);

  const tableColumns = useMemo(() => repositoriesColumns(), []);

  const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
    if (sortModel.length > 0) {
      dispatch(
        repositoriesActions.changeFilterParams({
          ...filterParams,
          sort: sortModel[0].field,
          order: sortModel[0].sort,
        })
      );
    } else {
      dispatch(
        repositoriesActions.changeFilterParams({
          ...filterParams,
          sort: undefined,
          order: undefined,
        })
      );
    }
  }, []);

  const sortModel: GridSortModel = useMemo(() => {
    return [
      {
        field: filterParams.sort,
        sort: filterParams.order,
      },
    ];
  }, [filterParams]);

  useEffect(() => {
    dispatch(repositoriesActions.fetchRepositories(filterParams));
  }, [filterParams]);

  return (
    <CustomTableWrapper>
      <DataGrid
        columns={tableColumns}
        rows={repositories}
        getRowHeight={() => "auto"}
        disableRowSelectionOnClick
        disableColumnMenu
        loading={isLoading}
        sortingMode='server'
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationMode='server'
        rowCount={totalCount}
      />
    </CustomTableWrapper>
  );
};

export default RepositoriesList;

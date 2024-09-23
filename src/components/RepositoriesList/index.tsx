import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  repositoriesSelectors,
  repositoriesActions,
} from "@/store/slices/repositories/repositoriesSlice";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {
  DataGrid,
  gridClasses,
  GridPaginationModel,
  GridSortModel,
} from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { repositoriesColumns } from "./columns";
import { pixelsToRem } from "@/theme/helpers";

const CustomTableWrapper = styled(Box)({
  height: "calc(100vh - 100px)",
  width: "100%",
});

const pageSizeOptions = [30, 50, 100];

const RepositoriesList = () => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: pageSizeOptions[0],
    page: 0,
  });

  const dispatch = useAppDispatch();
  const repositories = useAppSelector(repositoriesSelectors.getRepositories);
  const isLoading = useAppSelector(repositoriesSelectors.getIsLoading);
  const filterParams = useAppSelector(repositoriesSelectors.getFilterParams);
  const totalCount = useAppSelector(repositoriesSelectors.getTotalCount);

  const tableColumns = useMemo(() => repositoriesColumns(), []);

  const handleSortModelChange = (sortModel: GridSortModel) => {
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
  };

  const handleChangePaginationModel = (
    newPaginationModel: GridPaginationModel
  ) => {
    dispatch(
      repositoriesActions.changeFilterParams({
        ...filterParams,
        per_page: newPaginationModel.pageSize,
        page: newPaginationModel.page + 1,
      })
    );
    setPaginationModel(newPaginationModel);
  };

  const sortModel: GridSortModel = useMemo(() => {
    return [
      {
        field: filterParams.sort ?? "",
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
        pageSizeOptions={pageSizeOptions}
        paginationModel={paginationModel}
        onPaginationModelChange={handleChangePaginationModel}
        rowCount={totalCount}
        sx={{
          [`& .${gridClasses.cell}`]: {
            padding: pixelsToRem(10),
            display: "flex",
            alignItems: "center",
          },
          [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
            {
              outline: "none",
            },
          [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
            {
              outline: "none",
            },
        }}
      />
    </CustomTableWrapper>
  );
};

export default RepositoriesList;

import { Avatar, Box } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { StarIcon } from "../common/icons/StarIcon";
import { ForksIcon } from "../common/icons/ForksIcon";
import { pixelsToRem } from "@/theme/helpers";

export const repositoriesColumns = () => [
  {
    field: "owner.avatar_url",
    headerName: "Avatar",
    width: 44,
    sortable: false,
    filterable: false,
    renderHeader: () => null,
    renderCell: (params: GridRenderCellParams) => {
      const url = params.row.owner.avatar_url;
      return (
        <Avatar
          src={url}
          sx={{ width: pixelsToRem(24), height: pixelsToRem(24) }}
          variant='square'
        />
      );
    },
  },
  {
    field: "full_name",
    headerName: "Name",
    width: 250,
    sortable: false,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    sortable: false,
  },
  {
    field: "stars",
    headerName: "Stars",
    width: 120,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: pixelsToRem(10),
          }}
        >
          <StarIcon sx={{ flexShrink: 0 }} />
          <span>{params.row.stargazers_count.toLocaleString()}</span>
        </Box>
      );
    },
  },
  {
    field: "forks",
    headerName: "Forks",
    width: 120,
    renderCell: (params: GridRenderCellParams) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: pixelsToRem(10),
            }}
          >
            <ForksIcon sx={{ flexShrink: 0 }} />
            <span>{params.value.toLocaleString()}</span>
          </Box>
        );
      },
  },
  {
    field: "homepage",
    headerName: "Homepage",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const url = params.value;
      return (
        <a href={url} target='_blank' rel='noreferrer'>
          {url}
        </a>
      );
    },
  },
  {
    field: "html_url",
    headerName: "GitHub URL",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const url = params.value;
      return (
        <a href={url} target='_blank' rel='noreferrer'>
          {url}
        </a>
      );
    },
  },
];

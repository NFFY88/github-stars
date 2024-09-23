import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  repositoriesActions,
  repositoriesSelectors,
} from "./store/slices/repositories/repositoriesSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const repositories = useAppSelector(repositoriesSelectors.getRepositories);
  console.log("repositories", repositories);

  useEffect(() => {
    dispatch(
      repositoriesActions.fetchRepositories({
        q: "language:TypeScript",
        sort: "stars",
        order: "desc",
      })
    );
  }, []);
  return (
    <>
      <Typography variant='h1'>GitHub stars</Typography>
    </>
  );
};

export default App;

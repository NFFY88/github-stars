import { Typography } from "@mui/material";
import RepositoriesList from "./components/RepositoriesList";
import './styles/index.css'

const App = () => {
  return (
    <>
      <Typography variant='h1'>GitHub stars</Typography>

      <RepositoriesList />
    </>
  );
};

export default App;

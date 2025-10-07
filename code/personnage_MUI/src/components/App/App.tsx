import Personnage from "../Personnage";
import type { IPersonnageData } from "../../data/PersonnageData";
import { PersonnageData } from "../../data/PersonnageData";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Cutive Mono", "monospace"].join(","),
    },
    palette: {
      mode: "light",
      primary: {
        main: "#c75000",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#2f1000",
        paper: "#202027",
      },
      text: {
        primary: "#EFECEC",
        secondary: "#FFFFFF",
        disabled: "rgba(70,38,38,0.5)",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Cutive Mono';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          }
      `,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {PersonnageData.map((personnage: IPersonnageData) => {
          return (
            <Personnage
              nom={personnage.nom}
              photo={personnage.photo}
              adresse={personnage.adresse}
            />
          );
        })}
      </ThemeProvider>
    </>
  );
}

export default App;

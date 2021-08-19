import "./App.css";
import { CharactersProvider } from "./context/CharactersContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Routes from "./routes";

function App() {
  return (
    <>
      <CharactersProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </CharactersProvider>
    </>
  );
}

export default App;

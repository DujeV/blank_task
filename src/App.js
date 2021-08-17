import "./App.css";
import { CharactersProvider } from "./context/CharactersContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Routes from "./routes";

function App() {
  return (
    <div>
      <CharactersProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </CharactersProvider>
    </div>
  );
}

export default App;

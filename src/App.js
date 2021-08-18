import "./App.css";
<<<<<<< HEAD
import { CharactersProvider } from "./context/CharactersContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Routes from "./routes";
=======
import CharacterList from "./modules/CharacterList";
import Navbar from "./modules/Navbar/index";
>>>>>>> navbar

function App() {
  return (
    <div>
<<<<<<< HEAD
      <CharactersProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </CharactersProvider>
=======
      <Navbar />
      <CharacterList />
>>>>>>> navbar
    </div>
  );
}

export default App;

import "./App.css";
import { CharactersProvider } from "./context/CharactersContext";
import Routes from "./routes";

function App() {
  return (
    <div>
      <CharactersProvider>
        <Routes />
      </CharactersProvider>
    </div>
  );
}

export default App;

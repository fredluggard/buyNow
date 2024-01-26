import Navbar from "./components/NavBar/Navbar";
import { StoreProvider } from "./store/StoreProvider";
import "./styles/App.scss";

function App() {
  return (
    <StoreProvider>
      <Navbar />
    </StoreProvider>
  );
}

export default App;

import Main from "./components/Main";
import { CityProvider } from "./context/CityContext";

import './App.css'

function App() {
  return (
    <CityProvider>
      <Main/>
    </CityProvider>
  );
}

export default App;

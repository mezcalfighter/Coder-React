// importacion por defecto
//import EsteEsElHome from "./components/pages/home"


import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import Login from "./components/pages/login/Login";

function App() {
  let nombre = "Emanuel"

  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <ItemListContainer nombre={nombre} />
    </div>
  );
}

export default App;
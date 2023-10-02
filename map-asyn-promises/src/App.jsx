// importacion por defecto
//import EsteEsElHome from "./components/pages/home"


import { useState } from "react";
import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import Login from "./components/pages/login/Login";

function App() {
  let nombre = "Emanuel"
  const [mounted, setMounted] = useState(false)
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <button onClick={()=>{setMounted(!mounted)}}>Montar / Desmontar</button>
      {
        mounted && <ItemListContainer nombre={nombre} />
      }
      {
        !mounted && <CounterContainer stock={5}/>
      }
    </div>
  );
}

export default App;
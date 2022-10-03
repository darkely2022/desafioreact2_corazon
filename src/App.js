import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./context/Context";


export default function App() {
  const endpoint = "/fotos.json";
  const [publicaciones, setPublicaciones] = useState([]);
  const globalState = { publicaciones, setPublicaciones };

  useEffect(() => {
    const fetchDatos = async () => {
      let urlFiltro = endpoint;

      const resp = await fetch(urlFiltro);
      const respDatos = await resp.json();
      console.log("useffect")
      console.log(respDatos.photos);
      setPublicaciones(respDatos.photos);

    }

    fetchDatos();
  }, [])



  return (
    <div className="App">
      <Context.Provider value={ globalState }>
       
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
        
      </Context.Provider>

    </div>
  );
}

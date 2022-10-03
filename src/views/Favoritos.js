import Galeria from "../components/Galeria";
import { useContext , useState } from "react";
import Context from "../context/Context";
import "../assets/css/galeria.css";

export default function Favoritos() {
  const { publicaciones,setPublicaciones } = useContext(Context);
  const listaFiltrada=publicaciones.filter(el=> el.liked===false)
 
  return (

    <>
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 galeria grid-columns-4">
          
          
          {listaFiltrada.map((favoritos) => (
            <div className="galeria .foto" key={favoritos.id}>

              <div className="galeria2foto" style={{ backgroundImage: `url(${favoritos.src.original})` }} width={"200px"} height={"200px"}>


              </div>


            </div>
          ))}

        </div>
      </div>
    </>
  );
}

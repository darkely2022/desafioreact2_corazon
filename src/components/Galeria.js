import "../assets/css/galeria.css";
import corazon from "../assets/iconos/heart.svg"
import corazonfilled from "../assets/iconos/heart-filled.svg"
import Heart from "./Heart";
import { useContext , useState } from "react";
import Context from "../context/Context";
import Publicacion from "./Publicacion";
import { isConstructorDeclaration } from "typescript";
import Favoritos from "../views/Favoritos";
export default function Home(props) {
  const { publicaciones,setPublicaciones } = useContext(Context);
  const [publicacionfiltro, setPublicacionfiltro] = useState({});
  

 console.log("pase1")
 console.log(publicaciones)
 console.log(publicaciones.scr)

 
  function handleSubmit(e) {
    e.preventDefault();
       
  }

  const agregarfoto = (i,foto,desc,fotografo) => {
    alert("agregar")
    const Fotos={
        
      id:i,
      url:foto,
      descripcion:desc,
      autor:fotografo
    }
    
    setPublicacionfiltro([Fotos]);  
    console.log("filtro")
    console.log(Fotos);
    console.log(publicacionfiltro);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="galeria grid-columns-5 p-3">

        
          {publicaciones.map((publicacion) => (
            <div className="galeria .foto" key={publicacion.id}>
              
              <div className="galeria2foto" style={{backgroundImage:`url(${publicacion.src.original})` }}  width={"200px"} height={"200px"}>
              <div className="galeriafotosvg"><Heart filled={publicacion.liked}/></div>
              {publicacion.alt}                                                                                                           f
              {publicacion.photographer}
                 
              </div>
              <div>
              <button onClick={() => agregarfoto(publicacion.id, publicacion.src.original,publicacion.alt,publicacion.photographer)}>Agregar</button>
              </div>
              
            </div>
          ))}

        </div>
      </form>
    </>
  );
}

import imagen0 from './Imagenes/rey_atanagildo.png';
import imagen1 from './Imagenes/rey_leogivildo.png';
import imagen2 from './Imagenes/rey_sisebuto.png';
import imagen3 from './Imagenes/rey_incognito.png';
import './miCss.css';

function App() {
  let nombres =["Atanagildo", "Leogivildo", "Sisebuto"];
  
  const cambiarTexto=(e)=>{
    if(e.target.innerHTML=="Visto"){
      e.target.innerHTML = "";
    }else{
      e.target.innerHTML = "Visto";
    }
  }

  const cambiarImagen=(e)=>{
    if(e.target.src.includes("incognito")){
      e.target.style.visibility = "hidden";
    }else{
      e.target.src = imagen3;
    }
    e.target.parentNode.style.backgroundColor = "White"; /*parentNode, accede al padre del elemento, en este caso a div caja*/
  }

  return (
    <div className = "contenedor">
      <div className = 'caja'>
        <img onClick = {cambiarImagen} src = {imagen0}/>
        <div onClick = {cambiarTexto} className = 'nombre'>{nombres[0]}</div>
      </div>
      <div className = 'caja'>
        <img onClick = {cambiarImagen} src = {imagen1}/>
        <div onClick = {cambiarTexto} className = 'nombre'>{nombres[1]}</div>
      </div>
      <div className = 'caja'>
        <img onClick = {cambiarImagen} src = {imagen2}/>
        <div onClick = {cambiarTexto} className = 'nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;

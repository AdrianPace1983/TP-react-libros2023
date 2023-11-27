import TituloLibro from "./TituloLibro";
import libros from "./libros";

function App () {
  return(

    <div className="App">

      {libros.map((libros,index)=>(
        <TituloLibro key={index} titulo={libros.titulo} />
      ))}  
      
    </div>
  );
}
export default App;
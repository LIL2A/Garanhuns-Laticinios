import MenuOpcoes from "../components/MenuOpcoes/MenuOpcoes";
import cheese from "../Img/cheese.png"
import gutgut from "../Img/iogurte.png"
import butter from "../Img/butter.png"
import Boxes from "../components/Boxes/Boxes";
import Header from "../components/Header/Header";
import AddButton from "../components/Buttons/AddButton";
import { Link } from "react-router-dom";


const TelaPrincipal = () => {
  return (
    <div className="App">
      <Header texto={"Os melhores laticínios do mercado!"}  />
      <div className="buttons">
        <Link to="/TelaQueijos">
          <MenuOpcoes nome={<img src={cheese}  alt="Imagem de queijo"/>}/>
        </Link>
        <Link to="/TelaDerivados">
          <MenuOpcoes nome={<img src={gutgut}  alt="Imagem de iogurte"/>} />
        </Link> 
        <Link to="/TelaManteiga">
          <MenuOpcoes nome={<img src={butter}  alt="Imagem de manteiga"/>}/>
        </Link>
        
      </div>
      <Boxes titulo="Produção Ativa" ordem="Ordem nº 1">
        Queijo coalho 100(kg)
      </Boxes>
      <Boxes titulo="Entregas em Andamento" ordem="Ordem nº 1">
        Queijo coalho 100(kg)
        <div className="geo">
        <a href="geo:8.0463291,-34.9788791,14">Navegar</a>
        </div>
      </Boxes>
      
      <AddButton />
    </div>
  )
}

export default TelaPrincipal;
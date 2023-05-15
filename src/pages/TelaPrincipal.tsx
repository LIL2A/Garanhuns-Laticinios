import MenuOpcoes from "../components/MenuOpcoes/MenuOpcoes";
import cheese from "../Img/cheese.png"
import gutgut from "../Img/iogurte.png"
import butter from "../Img/butter.png"
import Boxes from "../components/Boxes/Boxes";
import Header from "../components/Header/Header";
import Boneca from "../Img/pic01.png";
import Typing from "../Img/picTyping.png";
import Driving from "../Img/picDriving.png"
import { Link } from "react-router-dom";
import Mapa from "../components/Mapa/Mapa";


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
      
      <div className="links-style">
        <Link to="/TelaCatalogo">
          <Boxes informacao="Catálogo de Produtos">
            <img src={Boneca} alt="Imagem do catálogo" />
          </Boxes>
        </Link>
        <Link to="/TelaRegistros">
          <Boxes informacao="Registrar Movimentação">
            <img src={Typing} alt="Imagem de registros" />
          </Boxes>
        </Link>
        <Link to="/TelaEntregas">
          <Boxes informacao="Serviços de Entrega">
            <img src={Driving} alt="Imagem de entregas" />
          </Boxes>
        </Link>
        
      </div>
    </div>
  )
}

export default TelaPrincipal;
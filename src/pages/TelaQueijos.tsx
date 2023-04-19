import { ImArrowLeft } from 'react-icons/im'
import cheese from "../Img/cheese.png"
import HeaderOptions from "../components/HeaderOptions/HeaderOptions"
import ProductsBox from '../components/ProductsBox/ProductsBox'
import Coalho from "../Img/queijoCoalho.png";
import Mussarela from "../Img/mussarela.png";
import Minas from "../Img/minas.png";
import Prato from "../Img/q-prato.png";
import './pages.css'
import AddButton from '../components/Buttons/AddButton'
import { Link } from 'react-router-dom';


const TelaQueijos = () => {
  return (
    <div >
      <HeaderOptions texto={"Queijos"} img={<img src={cheese} alt="Imagem de queijo" />} />
      <div className='product-style'>
        <ProductsBox img={<img src={Coalho} alt="Imagem de queijo" />} titulo={"Queijo Coalho"} />
        <ProductsBox img={<img src={Mussarela} alt="Imagem de queijo" />} titulo={"Queijo Muçarela"} />
        <ProductsBox img={<img src={Minas} alt="Imagem de queijo" />} titulo={"Queijo Manteiga"} />
        <ProductsBox img={<img src={Prato} alt="Imagem de queijo" />} titulo={"Queijo Manteiga"} />
      </div>
      <Link to="/TelaRegistros">
        <AddButton />
      </Link>
    </div>
  )
}

export default TelaQueijos



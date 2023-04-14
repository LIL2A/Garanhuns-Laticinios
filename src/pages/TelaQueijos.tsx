import { ImArrowLeft} from 'react-icons/im'
import cheese from "../Img/cheese.png"
import HeaderOptions from "../components/HeaderOptions/HeaderOptions"
import ProductsBox from '../components/ProductsBox/ProductsBox'
import './pages.css'
import AddButton from '../components/Buttons/AddButton'

const TelaQueijos = () => {
  return (
    <div >
      <HeaderOptions texto={"Queijos"} img={<img src={cheese} alt="Imagem de queijo"/>} />
      <div className='product-style'>
      <ProductsBox img={""} titulo={"Queijo Coalho"} texto={"100 kg"}/>
      <ProductsBox img={""} titulo={"Queijo Manteiga"} texto={"100 kg"}/>
      </div>
      <AddButton />
    </div>
  )
}

export default TelaQueijos



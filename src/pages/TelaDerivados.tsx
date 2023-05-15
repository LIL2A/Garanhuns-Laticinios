import React from 'react'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import ProductsBox from '../components/ProductsBox/ProductsBox'
import gutgut from "../Img/iogurte.png"
import Doce from "../Img/doce-leite.png"
import Yogurte from "../Img/yougurt.png"
import Manteiga from "../Img/manteiga.png"
import Ghee from "../Img/m-Ghee.png"
import './pages.css'
import AddButton from '../components/Buttons/AddButton'
import { Link } from 'react-router-dom'


const TelaDerivados = () => {
  return (
    <div > 
    <HeaderOptions texto={"Derivados"} img={<img src={gutgut} alt="Imagem de queijo"/>} />
    <div className='product-style'> 
    <ProductsBox img={<img src={Yogurte} alt="Imagem de queijo"/>} titulo={"Iogurte"} />
    <ProductsBox img={<img src={Doce} alt="Imagem de queijo"/>} titulo={"Doce de Leite"}/>
    <ProductsBox img={<img src={Manteiga} alt="Imagem de queijo"/>} titulo={"Manteiga Ghee"} texto={"100 kg"}/>
    <ProductsBox img={<img src={Ghee} alt="Imagem de queijo"/>} titulo={"Manteiga salgado"} texto={"100 kg"}/>
      
    <Link to="/TelaRegistros">
      <AddButton />
    </Link>
    </div>
  </div>
  )
}

export default TelaDerivados
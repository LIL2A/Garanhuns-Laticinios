import React from 'react'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import ProductsBox from '../components/ProductsBox/ProductsBox'
import gutgut from "../Img/iogurte.png"
import Doce from "../Img/doce-leite.png"
import Yogurte from "../Img/yougurt.png"
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
    <Link to="/TelaRegistros">
      <AddButton />
    </Link>
    </div>
  </div>
  )
}

export default TelaDerivados
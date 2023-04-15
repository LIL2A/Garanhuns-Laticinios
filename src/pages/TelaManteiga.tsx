import React from 'react'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import ProductsBox from '../components/ProductsBox/ProductsBox'
import AddButton from '../components/Buttons/AddButton'
import butter from "../Img/butter.png"
import Manteiga from "../Img/manteiga.png"
import Ghee from "../Img/m-Ghee.png"
import './pages.css'
import { Link } from 'react-router-dom'

const TelaManteiga = () => {
  return (
    <div >
      <HeaderOptions texto={"Manteigas"} img={<img src={butter} alt="Imagem de queijo"/>} />
      <div className='product-style'>
      <ProductsBox img={<img src={Manteiga} alt="Imagem de queijo"/>} titulo={"Manteiga Ghee"} texto={"100 kg"}/>
      <ProductsBox img={<img src={Ghee} alt="Imagem de queijo"/>} titulo={"Manteiga salgado"} texto={"100 kg"}/>
      </div>
      <Link to="/TelaRegistros">
        <AddButton />
      </Link>
      
    </div>
  )
}

export default TelaManteiga
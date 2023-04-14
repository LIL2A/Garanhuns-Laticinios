import React from 'react'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import ProductsBox from '../components/ProductsBox/ProductsBox'
import AddButton from '../components/Buttons/AddButton'
import butter from "../Img/butter.png"
import './pages.css'

const TelaManteiga = () => {
  return (
    <div >
      <HeaderOptions texto={"Manteigas"} img={<img src={butter} alt="Imagem de queijo"/>} />
      <div className='product-style'>
      <ProductsBox img={""} titulo={"Manteiga Ghee"} texto={"100 kg"}/>
      <ProductsBox img={""} titulo={"Manteiga salgado"} texto={"100 kg"}/>
      </div>
      <AddButton />
    </div>
  )
}

export default TelaManteiga
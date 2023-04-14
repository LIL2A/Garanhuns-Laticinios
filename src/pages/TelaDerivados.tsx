import React from 'react'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import ProductsBox from '../components/ProductsBox/ProductsBox'
import gutgut from "../Img/iogurte.png"
import './pages.css'
import AddButton from '../components/Buttons/AddButton'


const TelaDerivados = () => {
  return (
    <div >
    <HeaderOptions texto={"Outros Derivados"} img={<img src={gutgut} alt="Imagem de queijo"/>} />
    <div className='product-style'>
    <ProductsBox img={""} titulo={"Queijo Coalho"} texto={"100 kg"}/>
    <ProductsBox img={""} titulo={"Queijo Manteiga"} texto={"100 kg"}/>
    </div>
    <AddButton />
  </div>
  )
}

export default TelaDerivados
import React from 'react'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import ProductsBox from '../components/ProductsBox/ProductsBox'
import Manteiga from "../Img/manteiga.png"
import Ghee from "../Img/m-Ghee.png"
import Coalho from "../Img/queijoCoalho.png";
import Mussarela from "../Img/mussarela.png";
import Minas from "../Img/minas.png";
import Prato from "../Img/q-prato.png";
import Doce from "../Img/doce-leite.png"
import Yogurte from "../Img/yougurt.png"

const TelaCatalogo = () => {
  return (
    <div>
      <HeaderOptions texto={'Catálogo'} />

      {/* <div>
        <div className='product-style'>
          <ProductsBox img={<img src={Coalho} alt="Imagem de queijo" />} titulo={"Queijo Coalho"} />
          <ProductsBox img={<img src={Mussarela} alt="Imagem de queijo" />} titulo={"Queijo Muçarela"} />
          <ProductsBox img={<img src={Minas} alt="Imagem de queijo" />} titulo={"Queijo Manteiga"} />
          <ProductsBox img={<img src={Prato} alt="Imagem de queijo" />} titulo={"Queijo Manteiga"} />
          <ProductsBox img={<img src={Yogurte} alt="Imagem de queijo" />} titulo={"Iogurte"} />
          <ProductsBox img={<img src={Doce} alt="Imagem de queijo" />} titulo={"Doce de Leite"} />
          <ProductsBox img={<img src={Manteiga} alt="Imagem de queijo" />} titulo={"Manteiga Ghee"} texto={"100 kg"} />
          <ProductsBox img={<img src={Ghee} alt="Imagem de queijo" />} titulo={"Manteiga salgado"} texto={"100 kg"} />
        </div>
      </div> */}

      <div>
        <div>
          <div className='product-style'>
            <h4>Queijos</h4>
          </div>
          <div className='product-style'>
            <ProductsBox img={<img src={Coalho} alt="Imagem de queijo" />} titulo={"Queijo Coalho"} />
            <ProductsBox img={<img src={Mussarela} alt="Imagem de queijo" />} titulo={"Queijo Muçarela"} />
            <ProductsBox img={<img src={Minas} alt="Imagem de queijo" />} titulo={"Queijo Manteiga"} />
            <ProductsBox img={<img src={Prato} alt="Imagem de queijo" />} titulo={"Queijo Manteiga"} />
          </div>
        </div>
        <div>
          <div className='product-style'>
            <h4>Derivados</h4>
          </div>
          <div className='product-style'>
            <ProductsBox img={<img src={Yogurte} alt="Imagem de queijo" />} titulo={"Iogurte"} />
            <ProductsBox img={<img src={Doce} alt="Imagem de queijo" />} titulo={"Doce de Leite"} />
          </div>
        </div>
        <div>
          <div className='product-style'>
            <h4>Manteiga</h4>
          </div>
          <div className='product-style'>
            <ProductsBox img={<img src={Manteiga} alt="Imagem de queijo" />} titulo={"Manteiga Ghee"} texto={"100 kg"} />
            <ProductsBox img={<img src={Ghee} alt="Imagem de queijo" />} titulo={"Manteiga salgado"} texto={"100 kg"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaCatalogo
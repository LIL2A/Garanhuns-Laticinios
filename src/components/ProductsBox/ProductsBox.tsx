import React from 'react'
import './productsBox.css'

interface ProductsBoxProps{
    titulo: string,
    texto?: string,
    img?: any
}

const ProductsBox = ({titulo, texto, img}:ProductsBoxProps) => {
  return (
    <div>
        <div className='productBox'>
            {img}
            <a href='#'>{titulo}</a>
            <p>{texto}</p>
        </div>
    </div>
  )
}

export default ProductsBox

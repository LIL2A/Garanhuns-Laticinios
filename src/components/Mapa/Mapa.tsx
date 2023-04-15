import React from 'react'

interface MapaProps{
    iframe?: any
}

const Mapa = ({iframe}:MapaProps) => {
  return (
    <div>
        <div className="geo">
            <a href="geo:-8.593546942927151, -36.99591978482077">Navegar</a>
        </div>
    </div>
  )
}

export default Mapa

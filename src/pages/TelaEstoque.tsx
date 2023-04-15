import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import Labels from '../components/Labels/Labels'
import BoxEscrito from '../components/BoxEscrito/BoxEscrito'
import Mapa from '../components/Mapa/Mapa'


const TelaEstoque = () => {
  return (
    <div>
      <HeaderOptions texto={'Estoque'}  />
      <div className='estoque-style'>
        <Labels texto={'Produtos em Estoque'} />
        <BoxEscrito texto={'Queijo Coalho'}/>
        <BoxEscrito texto={'Queijo Minas'}/>
        <BoxEscrito texto={'Queijo mussarela'}/>
        <BoxEscrito texto={'Queijo prato'}/>
        <BoxEscrito texto={'Doce de leite'}/>
        <BoxEscrito texto={'Manteiga'}/>
        <BoxEscrito texto={'Manteiga gheiie'}/>  
      </div>
    </div>
  )
}

export default TelaEstoque


import Labels from '../components/Labels/Labels'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import Selects from '../components/Select/Selects'
import InputRadio from '../components/InputRadio/InputRadio'

const TelaRegistros = () => {
  return (
    <div>
      <HeaderOptions texto={'Registros'}  />
        <div className="conta-style">
          <Labels texto={'Período:'} />
          <InputRadio />
          <Labels texto={'Classificação:'} />
          <Selects nome={''}>
            <option id="options" value="" disabled></option>
            <option id="options"value="valor 1">Queijos</option>
            <option id="options"value="valor 1">Outros Derivados</option>
            <option id="options"value="valor 1">Manteigas</option>
          </Selects>
        </div>
    </div>
  )
}

export default TelaRegistros

import Labels from '../components/Labels/Labels'
import HeaderOptions from '../components/HeaderOptions/HeaderOptions'
import Selects from '../components/Select/Selects'
import InputRadio from '../components/InputRadio/InputRadio'
import InputTexto from '../components/Inputs/InputTexto'
import BotaoInserir from '../components/Buttons/BotaoInserir'

const TelaRegistros = () => {
  return (
    <div>
      <HeaderOptions texto={'Registros'}  />
        <div className="conta-style">
          <Labels texto={'Período:'} />
          <InputRadio />
          <Labels texto={'Classificação:'} />
          <Selects >
            <option id="options" value="null" disabled></option>
            <option id="options"value="valor 1">Leite</option>
            <option id="options"value="valor 2">Queijos</option>
            <option id="options"value="valor 3">Outros Derivados</option>
            <option id="options"value="valor 4">Manteigas</option>
          </Selects>
          <Labels texto={'Fornecedor:'} />
          <Selects>
            <option id="options" value="null" disabled></option>
            <option id="options"value="valor 1">Leite</option>
            <option id="options"value="valor 2">Queijos</option>
            <option id="options"value="valor 3">Outros Derivados</option>
            <option id="options"value="valor 4">Manteigas</option>
          </Selects>
          <Labels texto={'Descrição:'} />
          <InputTexto tipo={'text'} />
          <Labels texto={'Litros/Quantidade:'} />
          <InputTexto tipo={'text'} />
          <Labels texto={'Valor do Produto/Leite:'} />
          <InputTexto tipo={'text'} />
          <Labels texto={'Foto do Produto:'} />
          <InputTexto tipo={'image'} />
          <Labels texto={'Código do Produto:'} />
          <InputTexto tipo={'text'} />
          <Labels texto={'Lote:'} />
          <InputTexto tipo={'text'} />
          <BotaoInserir nome={'Inserir'} />
          <BotaoInserir nome={'Desfazer'} />
        </div>
    </div>
  )
}

export default TelaRegistros
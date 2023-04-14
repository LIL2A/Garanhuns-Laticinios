import './labels.css'

interface LabelsProps{
    texto: string
}

const Labels = ({texto}: LabelsProps) => {
  return (
    <div>
      <label className='label-style'>{texto}</label>
    </div>
  )
}

export default Labels

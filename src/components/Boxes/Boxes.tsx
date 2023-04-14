import './boxes.css'

interface BoxesProps{
    titulo?: string,
    ordem?: string,
    children?: React.ReactNode,
    link?: string
}

const Boxes = ({titulo, ordem, children, link}: BoxesProps) => {
  return (
    <div className='boxe-style'>
      <p>{titulo}</p>
      <div className='ordem-Servico'>
        <p>{ordem}</p>
        <div>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Boxes

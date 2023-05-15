import './boxes.css'

interface BoxesProps {

  informacao?: string,
  children?: React.ReactNode,
  link?: string
}

const Boxes = ({ informacao, children, link }: BoxesProps) => {
  return (
    // <div className='boxe-style'>
    //   <div className='ordem-Servico'>
    //     <p>{informacao}</p>
    //     <div>
    //         {children}
    //     </div>
    //   </div>
    // </div>

    <div className='boxe-style'>
      <div className='ordem-Servico'>
        <div className='paragrafo'>
          <p>{informacao}</p>
        </div>   
        <div className='imagem-box'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Boxes

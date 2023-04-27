import { useEffect, useState } from "react"
import Price from "./Price"

export default function SizeBlock({length, width, price, isCurrentlySelected, onSizeClick}) {

  const style={
    width: '163px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0EFF5',
    margin: '0 0 7px 0',
    borderRadius: '3px',

    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.4rem',
    lineHeight: '1.7rem',
  }

  const [isSelected, setIsSelected] = useState(isCurrentlySelected)

  useEffect(() => {
    setIsSelected(isCurrentlySelected)
  },[isCurrentlySelected])

  function selectItem(){
    onSizeClick(isSelected)
    setIsSelected(prev => !prev)
  }

  return (
    <div style={{flexBasis: '50%', display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
      <div>
        <div style={style} onClick={selectItem}>{length}x{width}</div>
        <Price price={price}/>
      </div>
      
    </div>
    
  )
}
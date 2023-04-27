import { useEffect, useState } from "react"
import Price from "./Price"
import classes from './card.module.scss'
import noImage from "../img/no-image.jpg"

export default function Card({img, title, price, openParams=undefined, isCurrentlyAdded=false, onCircleClick}) {
  const styleImage = {
    backgroundImage: img ? `url('https://api.architektoria.ru${img}')` : `url(${noImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '164px',
    height: '120px',
    position: 'relative',
  }

  const [isAdded, setIsAdded] = useState(isCurrentlyAdded)

  useEffect(() => {
    setIsAdded(isCurrentlyAdded)
  },[isCurrentlyAdded])

  function addItem(e){
    e.stopPropagation()
    onCircleClick(isAdded)
    setIsAdded(prev => !prev)
  }

  return (
    <div className={classes.container}> {/* bcontainer */}
    <div>
      <div style={styleImage} onClick={openParams}> {/* background image */}
        
        <div onClick={e => addItem(e)} className={classes.icon}>
          {!isAdded && <span className={classes.addIcon}> </span>}
          {isAdded && <span className={classes.addedIcon}> </span>}
        </div>
        
        {/* background + or another */}
      </div>
      <p className={classes.name}>{title}</p> {/* name */}
      <Price price={price}/>
    </div>
      
    </div>
  )
}
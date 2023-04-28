import classes from './price.module.scss'

export default function Price({price}) {
  return (
    <div className={classes.price}>
      <span>{price || "Без доплаты"}</span><span></span>
    </div>
  )
}
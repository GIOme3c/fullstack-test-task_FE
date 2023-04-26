import classes from './price.module.scss'

export default function Price({price}) {
  return (
    <div className={classes.price}>
      <span>{price}</span><span></span>
    </div>
  )
}
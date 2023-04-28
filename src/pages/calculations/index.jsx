import CartProduct from "@/components/CartProduct"
import OrderForm from "@/components/OrderForm"
import getFullPrice from "@/utils/calcFullPrice"
import { useSelector } from "react-redux"
import classes from '../../components/cart.module.scss'

export default function Calculations() {
  const { cart } = useSelector(state => state)

  let fullSumm = 0
  Object.keys(cart).map((idx) =>
    fullSumm += getFullPrice(cart[idx])
  )
  return (
    <div style={{background: '#F3F4F8'}}>
      {Object.keys(cart).map((idx) =>
        <CartProduct key={idx} data={cart[idx]}/>
      )}
      <div className={classes.general}>
        <div>
          <p style={{marginBottom: '10px'}} className={classes['general-text']}>Товаров на сумму</p>
          <p className={classes['general-text']}>Сумма всех скидок</p>
        </div>
        <div>
          <p className={classes['general-text']}>{fullSumm}</p>
          <p className={classes['general-text']}>{0}</p>
        </div>
      </div>
      <div>
        <OrderForm/>
      </div>
      
    </div>
  )
}
import Price from "./Price";
import classes from './cart.module.scss'
import ProductCounter from "./ProductCounter";
import { useActions } from "@/hooks/useActions";
import getFullPrice from "@/utils/calcFullPrice";

export default function CartProduct ({data}) {

  const { removeItem } = useActions() 

  const style = {
    backgroundImage: `url('https://api.architektoria.ru${data.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '90px',
    height: '90px',
    marginRight: '12px',
    // position: 'relative',
  }

  const fullPrice = getFullPrice(data)
  return (
    <div style={{position: 'relative', padding: '20px 16px', boxShadow: '0px 0px 6px rgba(38, 52, 117, 0.08)', borderRadius: '3px', marginBottom: '10px', background: '#ffffff'}}>
      <div style={{ display:'flex'}}>
        <div style={style}></div>
        <div>
          <p className={classes.title}>
            {data.title}
          </p>
          <Price price={fullPrice}/>
          <div>
            <ProductCounter productId={data.product_id}/>
          </div>
          {/* CheckBox */}
        </div>
        <div onClick={() => removeItem(data.product_id)} style={{position: 'absolute', top:'20px', right: '16px'}}>
          x
        </div>
      </div>
      <div style={{paddingTop: '12px', borderTop: '1px solid #E3E4ED', marginTop: '12px'}}>
        <div style={{marginBottom: '10px'}}><span className={classes.option}>Базовая стоимость</span><span>{data.price}</span></div>
        {data?.material && <div style={{marginBottom: '10px'}}><span className={classes.option}>{data.material.title}</span><span>{data.material.price || "Без доплаты"}</span></div>}
        {data?.option && <div style={{marginBottom: '10px'}}><span className={classes.option}>{data.option.title}</span><span>{data.option.price || "Без доплаты"}</span></div>}
        {data?.size && <div style={{marginBottom: '10px'}}><span className={classes.option}>{data.size.length}x{data.size.width}</span><span>{data.size.percent_price*data.price/100 || "Без доплаты"}</span></div>}
        {data?.base && <div style={{marginBottom: '10px'}}><span className={classes.option}>{data.base.title}</span><span>{data.base.price || "Без доплаты"}</span></div>}
      </div>
    </div>
  )
}
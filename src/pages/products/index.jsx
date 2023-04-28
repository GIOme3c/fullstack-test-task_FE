import { useRouter } from 'next/router'
import Card from "../../components/Card"
import Options from "../../components/Options"
import classes from "./products.module.scss"
import { useGetProductsQuery } from "../../store/products/products.api"
import { useSelector } from 'react-redux'
import { useActions } from '@/hooks/useActions'

export default function Products() {

  const { cart } = useSelector(state => state)
  const { addItem, removeItem } = useActions()
  const { data, error } = useGetProductsQuery()
  let router= useRouter()

  function redirect(p_id) {
    router.push('/options/'+p_id)
  }

  function openParams(p_id) {
    redirect(p_id)
  }

  const products = data?.map(product => {
    return <Card 
      key={product.product_id}
      img={product.image} 
      title={product.title} 
      price={product.price} 
      openParams={() => openParams(product.product_id)} 
      isCurrentlyAdded={cart[product.product_id]}
      onCircleClick={(isAdded) => isAdded ?removeItem(product.product_id) : addItem(product)}
    />
  })

  return (
    <div>
      <div  className={classes.container}>{products}</div>
    </div>
  )
}
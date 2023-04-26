import { useState } from "react"
import Card from "../../components/Card"
import Options from "../../components/Options"
import classes from "./products.module.scss"
import { useGetProductsQuery } from "../../store/products/products.api"

export default function Products() {

  const [isOpenParams, setIsOpenParams] = useState(false)
  const { data, error } = useGetProductsQuery()


  function openParams() {
    setIsOpenParams(true)
  }

  const products = data?.map(product => {
    return <Card key={product.product_id} img={product.image} title={product.title} price={product.price} openParams={openParams}/>
  })

  return (
    <div>
      {!isOpenParams && <div  className={classes.container}>{products}</div>}
      {isOpenParams && <Options/>}
      {/* <button style={{position:'absolute', top: '200px', right: '100px'}} onClick={() => openParams()}>OPEN</button> */}
    </div>
  )
}
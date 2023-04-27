import { useState } from "react"
import Card from "./Card";
import SizeBlock from "./SizeBlock";
import classes from '../pages/products/products.module.scss'
import optionsStyles from './options.module.scss'
import { useGetProductQuery } from "@/store/products/products.api";
import { useSelector } from "react-redux";

const options = [
  {
    id: 1,
    path: 'materials',
    name: 'Обивка',
  },
  {
    id: 2,
    path: 'sizes',
    name: 'Размер',
  },
  {
    id: 3,
    path: 'bases',
    name: 'Основание',
  },
  {
    id: 4,
    path: 'options',
    name: 'Доп. опции',
  }
]

export default function Options({productId}) {

  const { data, error } = useGetProductQuery(productId)
  const { cart } = useSelector(state => state)
  const [optionsName, setOptionsName] = useState(options[0].path);
//   console.log(cart)
//   const [isProductAdded, setIsProductAdded] = useState(!!cart.filter(item => item.product_id === productId))
  const currentProduct = cart.filter(item => item.product_id === productId) || false

//   function onCircleClick(optionType)


  const optionsJsx = options.map(option => {
    const style = {
      backgroundColor: option.path === optionsName ? '#263475' : '#F0EFF5',
      color: option.path === optionsName ? '#ffffff' : '#000000',
      padding: '8px 15px',
      margin: '1px',
      cursor: 'pointer',
    }
    return <div key={option.id} onClick={() => setOptionsName(option.path)} style={style}>{option.name}</div>
  })

  return (
    <div>
      <div className={optionsStyles.container}>
        {optionsJsx}
      </div>
      {data &&
      <div className={classes.container}>
        {optionsName === 'materials' && data.materials.map(option => <Card
          key={option.material_id} 
          img={option.image} 
          title={option.title} 
          price={option.price}
          isCurrentlyAdded={currentProduct?.material?.material_id === option.material_id || false}
        //   onCircleClick={(isAdded) => isAdded ? addItem(product) : removeItem(product.product_id)}
        />)}

        {optionsName === 'sizes' && data.sizes.map(option => <SizeBlock 
          key={option.size_id} 
          length={option.length} 
          width={option.width} 
          price={option.percent_price}
          isCurrentlyAdded={currentProduct?.size?.size_id === option.size_id || false}
        //   onCircleClick={(isAdded) => isAdded ? addItem(product) : removeItem(product.product_id)}
        />)}
        
        {optionsName === 'bases' && data.bases.map(option => <Card
          key={option.base_id} 
          img={option.image} 
          title={option.title} 
          price={option.price}
          isCurrentlyAdded={currentProduct?.base?.base_id === option.base_id || false}
        //   onCircleClick={(isAdded) => isAdded ? addItem(product) : removeItem(product.product_id)}
        />)}

        {optionsName === 'options' && data.options.map(option => <Card 
          key={option.option_id} 
          img={option.image} 
          title={option.title} 
          price={option.price}
          isCurrentlyAdded={currentProduct?.option?.option_id === option.option_id || false}
        //   onCircleClick={(isAdded) => isAdded ? addItem(product) : removeItem(product.product_id)}
        />)}
      </div>
      }

    </div>
  )
}
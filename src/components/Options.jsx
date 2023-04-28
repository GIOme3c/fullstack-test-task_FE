import { useEffect, useState } from "react"
import Card from "./Card";
import SizeBlock from "./SizeBlock";
import classes from '../pages/products/products.module.scss'
import optionsStyles from './options.module.scss'
import { useGetProductQuery } from "@/store/products/products.api";
import { useSelector } from "react-redux";
import { useActions } from "@/hooks/useActions";

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
  const { setItem, addItem } = useActions()
  const [optionsName, setOptionsName] = useState(options[0].path);
  const currentProduct = cart[productId]

  function onCircleClick(optionType, option){
    return (isAdded) =>{
      if (!currentProduct) {
        addItem({
          product_id:data.product_id,
          image:data.image,
          price:data.price,
          slug:data.slug,
          title:data.title,
        })
      }
      setItem({
        id:productId, 
        key:optionType, 
        value:isAdded ? null : option
      })
    }
  }


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
          onCircleClick={onCircleClick("material", option)}
        />)}

        {optionsName === 'sizes' && data.sizes.map(option => <SizeBlock 
          key={option.size_id} 
          length={option.length} 
          width={option.width} 
          price={(option.percent_price*currentProduct?.price/100).toFixed(1)}
          isCurrentlySelected={currentProduct?.size?.size_id === option.size_id || false}
          onSizeClick={onCircleClick("size", option)}
        />)}
        
        {optionsName === 'bases' && data.bases.map(option => <Card
          key={option.base_id} 
          img={option.image} 
          title={option.title} 
          price={option.price}
          isCurrentlyAdded={currentProduct?.base?.base_id === option.base_id || false}
          onCircleClick={onCircleClick("base", option)}
        />)}

        {optionsName === 'options' && data.options.map(option => <Card 
          key={option.option_id} 
          img={option.image} 
          title={option.title} 
          price={option.price}
          isCurrentlyAdded={currentProduct?.option?.option_id === option.option_id || false}
          onCircleClick={onCircleClick("option", option)}
        />)}
      </div>
      }

    </div>
  )
}
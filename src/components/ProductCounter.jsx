import { useActions } from "@/hooks/useActions"
import { useState } from "react"
import classes from './cart.module.scss'

export default function ProductCounter({productId}) {

    const [count, setCount] = useState(1)
    const { setCount:setProductCount } = useActions()

    function add() {
        setCount(prev => {
            const newValue = prev+1
            setProductCount({id:productId, multipler:newValue})
            return newValue
        })
        
    }

    function remove() {
        setCount(prev => {
            const newValue = prev !== 0 ? prev-1 : prev
            setProductCount({id:productId, multipler:newValue})
            return newValue
        })
    }

    return (
        <div className={classes['cart-counter']}>
            <span className={classes["remove-icon"]} onClick={() => remove()}></span> <span className={classes.count}>{count}</span> <span className={classes["add-icon"]} onClick={() => add()}></span>
        </div>
    )
}
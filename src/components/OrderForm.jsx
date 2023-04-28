import { useSaveOrderMutation } from '@/store/products/products.api'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './orderform.module.scss'

export default function OrderForm() {
    const [formValues, setFormValues] = useState({name:'', surname:'', phone:''})
    const { cart } = useSelector(state => state)
    const [saveOrder ] = useSaveOrderMutation()


    function sendOrder(){
        saveOrder({
            order:cart,
            user:formValues,
        })
    }

    function onChangeHandler(e, field) {
        setFormValues(prev => ({...prev, [field]: e.target.value}))
    }

    return (
        <form className={classes.container}>
            <p>Персональная информация</p>
            <input value={formValues.name} onChange={(e) => onChangeHandler(e,"name")} type="text" placeholder="Имя*"/>
            <input value={formValues.surname} onChange={(e) => onChangeHandler(e,"surname")} type="text" placeholder="Фамилия*"/>
            <input value={formValues.phone} onChange={(e) => onChangeHandler(e,"phone")} type="phone" placeholder="Телефон*"/>
            <button type="button" onClick={sendOrder}>Завершить и сохранить расчет</button>
        </form>
    )
}
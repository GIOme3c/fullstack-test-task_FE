import classes from './footer.module.scss';

export default function Footer () {
    const isActive = true;
    return (
        <ul className={classes.container}>
            <li className={classes.icon}>
                <span className={classes['products-icon']}></span>
                <span className={classes.text}>Изделия</span>
            </li>
            <li className={classes.icon}>
                <span className={classes['percent-icon']}></span>
                <span className={classes.text}>Акции</span>
            </li>
            <li className={classes.icon}>
                <span className={classes['calculator-icon']}></span>
                {/* <span className={classes['calculator-icon'] isActive ? classes['calculator-icon_active'] : ''}></span> */}
                <span className={classes.text}>Расчеты</span>
            </li>
        </ul>
        )
}
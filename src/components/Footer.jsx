import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import classes from './footer.module.scss';

export default function Footer () {
	const { setPage } = useActions()
	const { state } = useSelector(state => state)
	
	let router= useRouter()
	function redirect(newPage) {
		router.push('/'+newPage)
	}

	function changePage(newPage){
		setPage(newPage)
		redirect(newPage)
	}

	return (
		<ul className={classes.container}>
			<li className={classes.icon} onClick={() => changePage("products")}>
				<span className={`${classes['products-icon']} ${state.currentPage==="products" && classes['products-icon_active']}`}></span>
				<span className={classes.text}>Изделия</span>
			</li>
			<li className={classes.icon} onClick={() => changePage("sales")}>
				<span className={`${classes['percent-icon']} ${state.currentPage==="sales" && classes['percent-icon_active']}`}></span>
				<span className={classes.text}>Акции</span>
			</li>
			<li className={classes.icon} onClick={() => changePage("calculations")}>
				<span className={`${classes['calculator-icon']} ${state.currentPage==="calculations" && classes['calculator-icon_active']}`}></span>
				<span className={classes.text}>Расчеты</span>
			</li>
		</ul>
	)
}
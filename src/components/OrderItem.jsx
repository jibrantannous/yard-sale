import React, { useContext }  from 'react';
import { AppContext } from '../context/AppContext';

import '@styles/OrderItem.scss';

import close from '@icons/icon_close.png'


const OrderItem = ({product}) => {

	const {removeFromCard} = useContext(AppContext);

	const handleClick = (item)=> {
		removeFromCard(item)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images?.[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={()=> handleClick(product)}/>
		</div>
	);
}

export default OrderItem;
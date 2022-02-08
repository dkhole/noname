import React from 'react';
import { CartType } from './types';

interface CartContext {
	localCart: CartType,
	setLocalCart: Function,
}

const CartContext = React.createContext<CartContext>({
    localCart: {	
        checkoutUrl: '',
        id: '',
        totalAmount:0,
        lines:[]
    },
    setLocalCart: ()=>{},
});

export default CartContext;
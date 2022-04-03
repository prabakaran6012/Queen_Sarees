import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
    IoCartOutline
} from 'react-icons/io5';
import { useSelector } from 'react-redux';

const CartPreview = () => {

    const [totalQuantity, settotalQuantity] = useState(0)
    const { total } = useSelector(state => state.cart)

    useEffect(() => {
        settotalQuantity(total)
    }, [total])


    return (
        <div class='cart-preview' >
            <Link to="/cart" >
                <IoCartOutline style={{ marginRight: "20px",position:'relative' }} size={30} />
            </Link>
            {totalQuantity > 0 ? <div id='quantity'style={{height:'25px',width:'25px', borderRadius:'50%',backgroundColor:'violet',paddingLeft:'8px',fontWeight:'900',position:'absolute',top:'10px',right:'100px'}} >{totalQuantity}</div> : null}
        </div>
    );
}

export default CartPreview
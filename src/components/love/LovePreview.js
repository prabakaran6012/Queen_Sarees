import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
    FcLike
} from 'react-icons/fc';
import { useSelector } from 'react-redux';

const LovePreview = () => {

    const [totalQuantity, settotalQuantity] = useState(0)
    const { total } = useSelector(state => state.love)

    useEffect(() => {
        settotalQuantity(total)
    }, [total])


    return (
        <div class='love-preview' >
            <Link to="/love" >
                <FcLike style={{ marginRight: "20px",position:'relative' }} size={30} />
            </Link>
            {totalQuantity > 0 ? <div id='quantity'style={{height:'25px',width:'25px', borderRadius:'50%',backgroundColor:'yellowgreen',paddingLeft:'8px',fontWeight:'900',position:'absolute',top:'10px',right:'145px'}} >{totalQuantity}</div> : null}
        </div>
    );
}

export default LovePreview
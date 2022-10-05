import React, { useState } from "react";
import '../assets/css/ItemCount.css';


const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        if(stock > count) {
            setCount(count + 1);
        }
    }


    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }


    return(
        <div className="containerCounter">
            <button className={count > initial? "btn btn-outline-dark" : "btn btn-outline-dark disabled"} onClick={restar}> - </button>
            <label> {count} </label>
            <button className={stock > count ? "btn btn-outline-dark" : "btn btn-outline-dark disabled"} onClick={sumar}> + </button>

        </div>
    );
}

export default ItemCount;
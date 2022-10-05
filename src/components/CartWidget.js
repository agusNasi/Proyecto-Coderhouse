import React from "react";
import { NavLink } from "react-router-dom";


const CartWidget = () => {
    return(
        <>
            <NavLink to="/carrito" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1"></i> Carrito (0)</NavLink>
        </>
    );
}

export default CartWidget;
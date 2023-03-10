import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { allItemsContext } from "../App";
import { MdFavorite, MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Header() {
	const cartItems = useContext(allItemsContext).cartItems;
	const totalItems = getTotalQuantities(cartItems);
	return (
		<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#"><img src="#" alt="logo" width="150" height="75"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
	  <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/wishlist">Wishlist</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/checkout">checkout</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/men">MEN</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/women">Women</NavLink>
      </li>            
    </ul>
  </div>
</nav>
		</header>
	);
}

function getTotalQuantities(items) {
	const total = items.reduce((sum, item) => {
		return (sum += item.quantity);
	}, 0);
	return total;
}

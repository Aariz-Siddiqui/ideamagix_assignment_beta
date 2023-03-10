import React from "react";
import Cart from "./content page/Cart";
import Men from "./content page/Men";
import Wishlist from "./content page/Wishlist";
import Women from "./content page/Women";
import Login from "./content page/Login";
import Signup from "./content page/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";


export default function Main({
	addToCart,
	toggleWishlist,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	clearCart,
}) {
	console.log("main");
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Login />
							</>
						}
					/>
					<Route
						path="/signup"
						element={<>
								<Header/>
								<Signup/>
								</>}
					/>
					<Route
						path="/men"
						element={
							<>
								<Header />
								<Men
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/women"
						element={
							<>
								<Header />
								<Women
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Cart
									incrementQuantity={incrementQuantity}
									decrementQuantity={decrementQuantity}
									removeFromCart={removeFromCart}
									clearCart={clearCart}
								/>
							</>
						}
					/>
					<Route
						path="wishlist"
						element={
							<>
								<Header />
								<Wishlist
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>

				</Routes>
				</BrowserRouter>
		</>
	);
}

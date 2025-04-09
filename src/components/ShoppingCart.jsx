const products = [
	{ name: 'Mela', price: 0.5 },
	{ name: 'Pane', price: 1.2 },
	{ name: 'Latte', price: 1.0 },
	{ name: 'Pasta', price: 0.7 },
];

import { useReducer } from "react";

function ShoppingCart() {

	const [addedProducts, dispatchAddedProducts] = useReducer(reducer, []);

	function reducer(state, action) {
		switch (action.type) {
			case "ADD_PRODUCT":
				if (state.some(product => product.name === action.pName)) {
					return state;
				} else {
					const productToAdd = {
						name: action.pName,
						price: action.pPrice,
						quantity: action.pQuantity
					}
					return [...state, productToAdd];
				}

			default:
				return state;
		}
	}


	return (
		<>
			<section className="container">
				<h1>Lista dei prodotti</h1>
				<div className="products-container">
					<div className="products-titles">
						<span>Prodotto</span>
						<span>Prezzo</span>
					</div>
					{products.map((product, index) => (
						<div className="product-item" key={index}>
							<div className="product-info">
								<span>{product.name}</span>
								<span>{product.price}€</span>
							</div>
							<div className="add-product-btn" onClick={() => dispatchAddedProducts({ type: "ADD_PRODUCT", pName: product.name, pPrice: product.price, pQuantity: 1 })}>+</div>
						</div>
					))}
				</div>
			</section>

			<section className="container">
				<h1>Carrello</h1>
				<div className="products-container">
					{
						addedProducts.length > 0 ?
							addedProducts.map((product, index) => (
								<div key={index} className="product-item">
									<span>{product.name}</span>
									<span>{product.price}€</span>
									<span>Quantità: {product.quantity}</span>
								</div>
							)) :
							<div>Il tuo carrello è vuoto!</div>
					}
				</div>
			</section>
		</>
	)
}

export default ShoppingCart
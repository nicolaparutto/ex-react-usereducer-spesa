import { useState } from "react";


function ShoppingCart() {
	const products = [
		{ name: 'Mela', price: 0.5 },
		{ name: 'Pane', price: 1.2 },
		{ name: 'Latte', price: 1.0 },
		{ name: 'Pasta', price: 0.7 },
	];

	const [addedProducts, setAddedProducts] = useState([])

	function addToCart(product) {
		if (addedProducts.some(prod => prod.name === product.name)) {
			return;
		}
		const productToAdd = {
			...product,
			quantity: 1
		}
		setAddedProducts(curr => [...curr, productToAdd])
	}

	console.log(addedProducts);

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
								<span>{product.price.toFixed(2)}€</span>
							</div>
							<button className="add-product-btn" onClick={() => addToCart(product)}>+</button>
						</div>
					))}
				</div>
			</section>

			<section className="container">
				<h1>Carrello</h1>
				<div className="products-container">
					{
						addedProducts.length > 0 ?
							<div>
								{addedProducts.map((product, index) => (
									<div key={index} className="product-item">
										<span>{product.name}</span>
										<span>{product.price.toFixed(2)}€</span>
										<span>Quantità: {product.quantity}</span>
									</div>
								))}
								<div>Totale del carrello: </div>
							</div>
							:
							<div>Il tuo carrello è vuoto!</div>
					}
				</div>
			</section>
		</>
	)
}

export default ShoppingCart
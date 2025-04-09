import { useState } from "react";


function ShoppingCart() {
	const products = [
		{ name: 'Mela', price: 0.5 },
		{ name: 'Pane', price: 1.2 },
		{ name: 'Latte', price: 1.0 },
		{ name: 'Pasta', price: 0.7 },
	];

	const [addedProducts, setAddedProducts] = useState([])

	function updateProductQuantity(name, quantity) {
		if (quantity < 1) {
			return;
		}
		setAddedProducts(curr =>
			curr.map(prod => prod.name === name ? { ...prod, quantity } : prod)
		)
	}

	function addToCart(product) {
		const existingProduct = addedProducts.find(prod => prod.name === product.name);
		if (existingProduct) {
			updateProductQuantity(existingProduct.name, existingProduct.quantity + 1);
			return;
		} else {
			const productToAdd = {
				...product,
				quantity: 1
			}
			setAddedProducts(curr => [...curr, productToAdd])
		}
	}

	function removeFromCart(product) {
		setAddedProducts(curr => curr.filter(prod => {
			return prod.name !== product.name
		}))
	}

	const totalPrice = addedProducts.reduce((acc, curr) => {
		return acc + (curr.price * curr.quantity)
	}, 0)


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
								<div className="total-price"><span>Totale:</span> {totalPrice.toFixed(2)}€</div>
								{
									addedProducts.map((product, index) => (
										<div key={index} className="product-item">
											<div className="product-info">
												<span>{product.name}</span>
												<span>{product.price.toFixed(2)}€</span>
												<div>
													<button className="add-one-btn" onClick={() => updateProductQuantity(product.name, product.quantity + 1)}>+</button>
													<span>{product.quantity}</span>
													<button className="remove-one-btn" onClick={() => updateProductQuantity(product.name, product.quantity - 1)}>-</button>
												</div>
											</div>
											<button className="remove-product-btn" onClick={() => removeFromCart(product)}><i class="fa-solid fa-trash-can"></i></button>
										</div>
									))
								}
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
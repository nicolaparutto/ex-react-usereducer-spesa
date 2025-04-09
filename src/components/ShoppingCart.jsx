const products = [
	{ name: 'Mela', price: 0.5 },
	{ name: 'Pane', price: 1.2 },
	{ name: 'Latte', price: 1.0 },
	{ name: 'Pasta', price: 0.7 },
];

function ShoppingCart() {
	return (
		<section className="container">
			<h1>Lista dei prodotti</h1>
			<div className="products-container">
				<div className="products-titles">
					<span>Prodotto</span>
					<span>Prezzo</span>
				</div>
				{products.map((product, index) => (
					<div className="product">
						<span>{product.name}</span>
						<span>{product.price}€</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default ShoppingCart
import React from 'react';
import { useContext } from 'react';
import ProductContext from "../Contexts/ProductContext";


// Components
import Product from './Product';

const Products = props => {
	const  { products, addItem }= useContext(ProductContext);
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;

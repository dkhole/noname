/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { shopifyQuery } from "../utils/shopifyQuery";
import { CartType, ProductType } from "../utils/types";
import { initialiseCart } from "../utils/cartHelpers";
import Footer from "../components/Footer";
import { mediaQuery } from "../utils/mediaQuery";
import Email from "../components/Email";
import { getImage } from "../utils/helpers";
import CartContext from "../utils/CartContext";

const Products: NextPage = ({ shopify }: any) => {
	const [products, setProducts] = useState<[ProductType]>();
	const [localCart, setLocalCart] = useState<CartType>({
		checkoutUrl: "",
		id: "",
		totalAmount: 0,
		lines: [],
	});

	useEffect(() => {
		initialiseCart(setLocalCart);
	}, []);

	useEffect(() => {
		const items = shopify.data.products.edges.map((prod: any) => {
			return {
				id: prod.node.id,
				title: prod.node.title,
				description: prod.node.description,
				merchId: prod.node.variants.edges[0].node.id,
				price: parseInt(prod.node.variants.edges[0].node.priceV2.amount),
				img: getImage(prod.node.title.charAt(0)),
			};
		});

		setProducts(items);
	}, [shopify.data.products.edges]);

	// console.log(products);
	// console.log(localCart);

	return (
		<CartContext.Provider
			value={{
				localCart,
				setLocalCart,
			}}
		>
			<div css={css``}>
				<Nav localCart={localCart} />
				<div
					css={css`
						padding: 0 35px;
						padding-top: 110px;
						font-family: Montserrat;
						text-align: center;
						@media (min-width: ${mediaQuery}) {
							padding-top: 150px;
						}
					`}
				>
					<h1
						css={css`
							margin: 0;
							padding: 0;
							font-weight: 600;
							font-size: 27px;
						`}
					>
						All Products
					</h1>
					<div
						css={css`
							margin-bottom: 100px;
							@media (min-width: ${mediaQuery}) {
								display: flex;
								flex-wrap: wrap;
							}
						`}
					>
						{products ? (
							products.map((product: ProductType, index: number) => {
								return <Card merchId={product.merchId} img={product.img} title={product.title} description={product.description} price={product.price} key={index} />;
							})
						) : (
							<div></div>
						)}
					</div>
				</div>
				<Email />
				<Footer />
			</div>
		</CartContext.Provider>
	);
};

export async function getStaticProps() {
	// Call an external API endpoint to get posts

	const query = `
	{
		products(first: 5) {
			edges {
				node {
					id
					title
					description
					variants(first: 1) {
						edges {
							node {
								id
								priceV2 {
									amount 
								}
							}
						}   
					}
        		}
      		}
    	}
  	}
	`;

	const shopify = await shopifyQuery(query, null);

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: { shopify },
	};
}

export default Products;

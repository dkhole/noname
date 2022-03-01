/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { shopifyQuery } from "../utils/shopifyQuery";
import { CartType, ProductType } from "../utils/types";
import Footer from "../components/Footer";
import { mediaQuery } from "../utils/mediaQuery";
import Email from "../components/Email";
import CartContext from "../utils/CartContext";
import useInitialiseProducts from "../utils/useInitialiseProducts";
import useInitialiseCart from "../utils/useInitialiseCart";

const Products: NextPage = ({ shopify }: any) => {
	const [products]: ProductType[][] = useInitialiseProducts(shopify);
	const [localCart, setLocalCart]: [CartType, React.Dispatch<React.SetStateAction<CartType>>] = useInitialiseCart();

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

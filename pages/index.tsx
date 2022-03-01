/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import BestSellers from "../components/BestSellers";
import Values from "../components/Values";
import Email from "../components/Email";
import Footer from "../components/Footer";
import { shopifyQuery } from "../utils/shopifyQuery";
import CartContext from "../utils/CartContext";
import useInitialiseProducts from "../utils/useInitialiseProducts";
import useInitialiseCart from "../utils/useInitialiseCart";
import { CartType, ProductType } from "../utils/types";

const Home: NextPage = ({ shopify }: any) => {
	const [products]: ProductType[][] = useInitialiseProducts(shopify);
	const [localCart, setLocalCart]: [CartType, React.Dispatch<React.SetStateAction<CartType>>] = useInitialiseCart();

	return (
		<CartContext.Provider
			value={{
				localCart,
				setLocalCart,
			}}
		>
			<div
				css={css`
					width: 100vw;
					overflow-x: hidden;
					position: relative;
				`}
			>
				<Nav localCart={localCart} />
				<Landing />
				<BestSellers products={products} />
				<Values />
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

export default Home;

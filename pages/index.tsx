/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = ({ shopify }: any) => {
	const [products, setProducts] = useState();

	useEffect(() => {
		console.log(shopify.data.products.edges[0].node.media);
		const items = shopify.data.products.edges.map((prod: any) => {
			let image: string, vrnts: [any, any];

			prod.node.media.edges.length < 1 ? (image = "") : (image = prod.node.media.edges[0].node.image.originalSrc);
			prod.node.variants.edges.length < 2 ? (vrnts = [null, null]) : (vrnts = [prod.node.variants.edges[0].node, prod.node.variants.edges[1].node]);

			return {
				id: prod.node.id,
				title: prod.node.title,
				description: prod.node.description,
				img: image,
				variants: vrnts,
			};
		});

		setProducts(items);
	}, []);
	console.log(products);
	return (
		<div
			css={css`
				color: red;
			`}
		>
			what
		</div>
	);
};

export async function getStaticProps() {
	// Call an external API endpoint to get posts
	const STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_KEY;
	const GRAPHQL_URL = `https://${process.env.SHOPIFY_URL}/api/2021-10/graphql.json`;

	const query = `
	{
		products(first: 5) {
			edges {
				node {
					id
          title
          description
          ... on Product {
            media(first: 3) {
              edges{
                node{
                  ...on MediaImage {
                    image {
                      originalSrc
                    }
                  }
                }
              }
            }  
          }
          variants(first: 3) {
            edges {
              node {
                id
                title
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

	const GRAPHQL_BODY = (): RequestInit => {
		return {
			method: "POST",
			headers: {
				"X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN!,
				"Content-Type": "application/graphql",
			},
			body: query,
		};
	};

	const res = await fetch(GRAPHQL_URL, GRAPHQL_BODY());
	const shopify = await res.json();
	console.log(shopify.data.products.edges);

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: { shopify },
	};
}

export default Home;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";

const Home: NextPage = (props) => {
	console.log(props);
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
	const data = await res.json();
	console.log(data.data.products.edges);

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: { data },
	};
}

export default Home;

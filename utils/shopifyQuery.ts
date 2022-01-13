export const shopifyQuery = async (query: any, variables: any) => {
	// Call an external API endpoint to get posts
	const STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_KEY;
	const GRAPHQL_URL = `https://${process.env.SHOPIFY_URL}/api/2022-01/graphql.json`;
	const GRAPHQL_BODY = () => {
		if (variables === null) {
			return {
				method: 'POST',
				headers: {
					'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: query,
				}),
			};
		} else {
			return {
				method: 'POST',
				headers: {
					'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: query,
					variables: variables,
				}),
			};
		}
	};
    const body: any = GRAPHQL_BODY()
	const res = await fetch(GRAPHQL_URL, body);
	const shopify = await res.json();
	return shopify;
};

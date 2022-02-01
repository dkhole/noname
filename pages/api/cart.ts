import { shopifyQuery } from "../../utils/shopifyQuery";

export default async function handler(req: any, res: any) {
    if(req.method === 'POST') {
        if(req.body != '') {
            //add item to cart
            const data = JSON.parse(req.body);
            const cartId = data.cartId;
            const merchId = data.merchId;
            const quantity: number = parseInt(data.quantity);
            const query = `
                mutation cartLinesAdd($lines: [CartLineInput!]!, $cartId: ID!) {
                    cartLinesAdd(lines: $lines, cartId: $cartId) {
                        cart {
                            id
                            checkoutUrl
                            lines(first:10) {
                                edges {
                                    node {
                                        id
                                        quantity
                                        merchandise {
                                            ... on ProductVariant {
                                              product {
                                                title
                                                priceRange {
                                                    minVariantPrice {
                                                        amount
                                                    }
                                                }
                                              }
                                            }
                                        }
                                    }
                                }
                            }
                            estimatedCost {
                                totalAmount {
                                  amount
                                  currencyCode
                                }
                            }
                        }
                        userErrors {
                            code
                            field
                            message
                        }
                    }
                }
            `
            const variables = 
            {
                "lines": [
                    {
                        "merchandiseId": merchId,
                        "quantity": quantity
                    }
                ],
                "cartId": cartId,
            };
            
            const shopify = await shopifyQuery(query, variables);
            res.status(201).json(shopify);
        } else {
            //create cart
            const query = `
                mutation cartCreateMutation($cartInput: CartInput) {
                    cartCreate(input: $cartInput) {
                        cart {
                            id
                            checkoutUrl
                            lines(first:10) {
                                edges {
                                    node {
                                        id
                                        quantity
                                    }
                                }
                            }
                            estimatedCost {
                                totalAmount {
                                    amount
                                    currencyCode
                                }
                            }
                        }
                    }
                }
            `;
            const shopify = await shopifyQuery(query, null);
            res.status(201).json(shopify);
        } 
    } else if(req.method === 'PUT') {
        const data = JSON.parse(req.body);
        const cartId = data.cartId;
        const lineId = data.lineId;
        const quantity = data.quantity;

        const query = `
        mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
            cartLinesUpdate(cartId: $cartId, lines: $lines) {
                cart {
                    id
                    checkoutUrl
                    lines(first:10) {
                        edges {
                            node {
                                id
                                quantity
                                merchandise {
                                    ... on ProductVariant {
                                        product {
                                        title
                                        priceRange {
                                            minVariantPrice {
                                                amount
                                            }
                                        }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    estimatedCost {
                        totalAmount {
                            amount
                            currencyCode
                        }
                    }
                }
                userErrors {
                    code
                    field
                    message
                }
            }
          }
        `;
        const variables = 
        {
            "cartId": cartId,
            "lines": {
                "id": lineId,
                "quantity": quantity,
            }
        };
        
        const shopify = await shopifyQuery(query, variables);
        res.status(201).json(shopify);
    } else if(req.method === 'DELETE') {
        //need cart id and line id
        //add item to cart
        const data = JSON.parse(req.body);
        const cartId = data.cartId;
        const lineId = data.lineId;

        const query = `
            mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
                cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
                    cart {
                        id
                        checkoutUrl
                        lines(first:10) {
                            edges {
                                node {
                                    id
                                    quantity
                                    merchandise {
                                        ... on ProductVariant {
                                            product {
                                            title
                                            priceRange {
                                                minVariantPrice {
                                                    amount
                                                }
                                            }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        estimatedCost {
                            totalAmount {
                                amount
                                currencyCode
                            }
                        }
                    }
                    userErrors {
                        code
                        field
                        message
                    }
                }
            }
        `
        const variables = 
        {
            "cartId": cartId,
            "lineIds": [
                lineId
            ]
        };
        
        const shopify = await shopifyQuery(query, variables);
        res.status(201).json(shopify);
    } else {
        res.status(200).json("hello");
    }

	// if (localCart.length < 1) {
	// 	const query = `mutation cartCreateMutation($cartInput: CartInput) {
	// 		cartCreate(input: $cartInput) {
	// 		  cart {
	// 			id
	// 			checkoutUrl
	// 			lines(first:10) {
	// 			  edges {
	// 				 node {
	// 					quantity
	// 				 }
	// 			   }
	// 			}
	// 		  }
	// 		}
	// 	  }`;

	// 	const variables = `{
	// 		"cartInput": {
	// 			"lines": [
	// 				{
	// 					"quantity": 1,
	// 					"variantId": "gid://shopify/ProductVariant/40687600599194",
	// 				}
	// 			]
	// 		}
	// 	}`;

	// 	const shopify = await shopifyQuery(query, variables);
	// 	console.log(shopify);
	//}
}
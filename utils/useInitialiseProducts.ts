import { useEffect, useState } from "react";
import { getImage } from "./helpers";
import { ProductType } from "./types";

export default function useInitaliseProducts( shopify: any): ProductType[][]{
    const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		//get items from shopify
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

    return [products];
}
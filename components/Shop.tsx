/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import beef from "../imgs/beef.png";
import { CartType, ProductType } from "../utils/types";
import Card from "./Card";

interface Props {
	addToCart: Function;
	localCart: CartType;
	setLocalCart: Function;
	products: ProductType[];
}

export default function Shop({ addToCart, localCart, setLocalCart, products }: Props) {
	return (
		<div
			css={css`
				font-family: Montserrat;
				text-align: center;
			`}
		>
			<h1
				css={css`
					font-weight: 600;
					margin-bottom: 0;
				`}
			>
				Best Sellers
			</h1>
			<div>
				{products.length > 0 ? (
					<>
						<Link href="/products/chicken-beef">
							<a
								css={css`
									text-decoration: none;
									cursor: pointer;
								`}
							>
								<Card addToCart={addToCart} localCart={localCart} setLocalCart={setLocalCart} merchId={products[0].merchId} img={beef} title={products[0].title} description="Our #1 Pick for Picky Eaters!" price={products[0].price} />
							</a>
						</Link>
						<Card addToCart={addToCart} localCart={localCart} setLocalCart={setLocalCart} merchId={products[1].merchId} img={beef} title={products[1].title} description="Our #1 Pick for Picky Eaters!" price={products[1].price} />
						<Card addToCart={addToCart} localCart={localCart} setLocalCart={setLocalCart} merchId={products[2].merchId} img={beef} title={products[2].title} description="Our #1 Pick for Picky Eaters!" price={products[2].price} />
					</>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}

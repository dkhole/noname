/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import beef from "../imgs/beef.png";
import { mediaQuery } from "../utils/mediaQuery";
import { CartType, ProductType } from "../utils/types";
import Card from "./Card";

interface Props {
	addToCart: Function;
	localCart: CartType;
	setLocalCart: Function;
	products: ProductType[];
}

export default function BestSellers({ addToCart, localCart, setLocalCart, products }: Props) {
	return (
		<div
			css={css`
				font-family: Montserrat;
				text-align: center;
				position: relative;
			`}
		>
			<h1
				css={css`
					font-weight: 600;
					margin-bottom: 5px;
				`}
			>
				Best Sellers
			</h1>
			<Link href={"/products"}>
				<a
					css={css`
						font-size: 12px;
						font-weight: 600;
						text-decoration: underline;
						cursor: pointer;
						color: #f58f83;
						&:hover {
							color: #ea5c4c;
						}
					`}
				>
					View All
				</a>
			</Link>
			<div
				css={css`
					@media (min-width: ${mediaQuery}) {
						display: flex;
						justify-content: center;
						gap: 50px;
						align-items: center;
					}
				`}
			>
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
						<Link href="/products/chicken-beef">
							<a
								css={css`
									text-decoration: none;
									cursor: pointer;
								`}
							>
								<Card addToCart={addToCart} localCart={localCart} setLocalCart={setLocalCart} merchId={products[1].merchId} img={beef} title={products[1].title} description="Our #1 Pick for Picky Eaters!" price={products[1].price} />
							</a>
						</Link>
						<Link href="/products/chicken-beef">
							<a
								css={css`
									text-decoration: none;
									cursor: pointer;
								`}
							>
								<Card addToCart={addToCart} localCart={localCart} setLocalCart={setLocalCart} merchId={products[2].merchId} img={beef} title={products[2].title} description="Our #1 Pick for Picky Eaters!" price={products[2].price} />
							</a>
						</Link>
					</>
				) : (
					<div></div>
				)}
			</div>
			<Link href={"/products"}>
				<div
					css={css`
						margin-bottom: 50px;
					`}
				>
					<a
						css={css`
							font-size: 12px;
							font-weight: 600;
							text-decoration: underline;
							cursor: pointer;
							color: #f58f83;
							&:hover {
								color: #ea5c4c;
							}
						`}
					>
						View All
					</a>
				</div>
			</Link>
		</div>
	);
}

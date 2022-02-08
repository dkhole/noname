/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import { mediaQuery } from "../utils/mediaQuery";
import { CartType, ProductType } from "../utils/types";
import Card from "./Card";

interface Props {
	products: ProductType[];
}

export default function BestSellers({ products }: Props) {
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
			<Link href={"/products"} passHref>
				<div
					css={css`
						margin-top: 15px;
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
						<Card merchId={products[0].merchId} img={products[0].img} title={products[0].title} description={products[0].description} price={products[0].price} />
						<Card merchId={products[1].merchId} img={products[1].img} title={products[1].title} description={products[1].description} price={products[1].price} />
						<Card merchId={products[2].merchId} img={products[2].img} title={products[2].title} description={products[2].description} price={products[2].price} />
					</>
				) : (
					<div></div>
				)}
			</div>
			<Link href={"/products"} passHref>
				<div
					css={css`
						margin-top: 50px;
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

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

interface CardProps {
	img: StaticImageData;
	title: string;
	description: string;
	price: string;
}

export default function Card({ img, title, description, price }: CardProps) {
	return (
		<div
			css={css`
				height: 400px;
				width: 300px;
				margin: auto;
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
			`}
		>
			<Image
				src={img}
				alt="Beef dog food"
				// blurDataURL="data:..." automatically provided
				// placeholder="blur" // Optional blur-up while loading
			/>
			<div>
				<h5
					css={css`
						margin-bottom: 2.5px;
					`}
				>
					{title}
				</h5>
				<span
					css={css`
						font-size: 13px;
					`}
				>
					{description}
				</span>
				<br />
				<span
					css={css`
						font-weight: 600;
						font-size: 12px;
					`}
				>
					{price}
				</span>
				<br />
				<span
					css={css`
						font-weight: 600;
						font-size: 12px;
						&:hover {
							text-decoration: underline;
							text-decoration-color: #f58f83;
							text-decoration-thickness: 4px;
							cursor: pointer;
						}
					`}
				>
					ADD TO BAG
				</span>
			</div>
		</div>
	);
}

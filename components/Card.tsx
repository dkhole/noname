/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { getLink } from "../utils/helpers";
import { addToCart } from "../utils/cartHelpers";
import CartContext from "../utils/CartContext";

interface Props {
	merchId: string;
	img: any;
	title: string;
	description: string;
	price: number;
}

export default function Card({ merchId, img, title, description, price }: Props) {
	const [link, setLink] = useState("");

	const { localCart, setLocalCart } = useContext(CartContext);

	useEffect(() => {
		if (title.length > 0) {
			setLink(getLink(title.charAt(0)));
		}
	}, [title]);

	return (
		<Link href={link} passHref>
			<div
				css={css`
					height: 370px;
					width: 300px;
					margin: auto;
					flex: 0 0 auto;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					cursor: pointer;
				`}
			>
				<div
					css={css`
						position: relative;
						height: 350px;
						width: 350px;
						top: 15px;
					`}
				>
					{img ? (
						<Image
							src={img}
							alt="Beef dog food"
							layout="fill"
							priority={true}
							quality={30}
							blurDataURL="data:..." //automatically provided
							placeholder="blur" // Optional blur-up while loading
						/>
					) : (
						<div>IMAGE ERROR</div>
					)}
				</div>

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
						{"$" + price}
					</span>
					<br />
					<button
						onClick={(e) => addToCart(e, localCart.id, merchId, 1, setLocalCart)}
						css={css`
							font-weight: 600;
							font-size: 12px;
							border: none;
							background: none;
							&:hover {
								text-decoration: underline;
								text-decoration-color: #f58f83;
								text-decoration-thickness: 4px;
								cursor: pointer;
							}
						`}
					>
						ADD TO BAG
					</button>
				</div>
			</div>
		</Link>
	);
}

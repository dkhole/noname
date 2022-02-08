/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import beef from "../public/imgs/beef.png";
import CartContext from "../utils/CartContext";
import { removeLine, updateLine } from "../utils/cartHelpers";

interface Props {
	cartId: string;
	item: any;
	quantity: number;
}

export default function CartItem({ cartId, item, quantity }: Props) {
	const [itemQuantity, setItemQuantity] = useState<number>(0);
	const [revealUpdate, setRevealUpdate] = useState<boolean>(false);

	const { setLocalCart } = useContext(CartContext);

	useEffect(() => {
		setItemQuantity(quantity);
	}, [quantity]);

	useEffect(() => {
		if (itemQuantity !== quantity) {
			setRevealUpdate(true);
		} else {
			setRevealUpdate(false);
		}
	}, [itemQuantity, quantity]);

	//console.log(item);

	return (
		<div
			css={css`
				display: flex;
				align-items: center;
				padding: 12.5px;
				margin-top: 15px;
			`}
		>
			<Image src={beef} alt="Beef dogfood image" height={70} width={70} />

			<div
				css={css`
					position: relative;
					display: flex;
					flex-direction: column;
					margin-left: 25px;
					width: 100%;
				`}
			>
				<h4
					css={css`
						margin: 0;
						font-size: 14px;
					`}
				>
					{item.node.merchandise.product.title}
				</h4>
				<span
					css={css`
						font-size: 12px;
					`}
				>
					{`$${item.node.merchandise.product.priceRange.minVariantPrice.amount}`}
				</span>
				<span
					css={css`
						font-size: 12px;
					`}
				>
					500g
				</span>
				<div
					css={css`
						position: absolute;
						top: 15px;
						right: 10px;
						font-size: 19px;
					`}
				>
					<span>{`$${quantity * item.node.merchandise.product.priceRange.minVariantPrice.amount}`}</span>
				</div>
				<div
					css={css`
						margin-top: 10px;
						display: flex;
						justify-content: space-between;
						width: 100%;
					`}
				>
					<input
						css={css`
							text-align: center;
							width: 60px;
							height: 15px;
							font-size: 13px;
							padding: 3px;
						`}
						type="number"
						min="1"
						max="100"
						value={itemQuantity}
						onChange={(e) => setItemQuantity(parseInt(e.target.value))}
					/>
					{revealUpdate ? (
						<button
							css={css`
								background: none;
								border: none;
								font-size: 10px;
								text-decoration: underline;
								cursor: pointer;
								&:hover {
									color: #f58f83;
								}
							`}
							onClick={(e: any) => {
								setRevealUpdate(false);
								updateLine(e, cartId, item.node.id, itemQuantity, setLocalCart);
							}}
						>
							Update Line
						</button>
					) : (
						<div></div>
					)}
					<button
						css={css`
							background: none;
							border: none;
							font-size: 10px;
							text-decoration: underline;
							cursor: pointer;
							margin-top: 5px;
							margin-right: 5px;
							padding: 0;
							height: 12px;
							&:hover {
								color: #f58f83;
							}
						`}
						onClick={(e: any) => removeLine(e, cartId, item.node.id, setLocalCart)}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
}

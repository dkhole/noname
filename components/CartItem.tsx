/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import beef from "../imgs/beef.png";

interface Props {
	quantity: number,
}

export default function CartItem({ quantity }: Props) {
	const [itemQuantity, setItemQuantity] = useState<number>(0);
	useEffect(() => {
		setItemQuantity(quantity);
	}, [quantity]);

	console.log(itemQuantity);
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
					CHICKEN + BEEF RECIPE
				</h4>
				<span
					css={css`
						font-size: 12px;
					`}
				>
					$7
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
					<button
						css={css`
							background: none;
							border: none;
							font-size: 10px;
							text-decoration: underline;
							cursor: pointer;
						`}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
}
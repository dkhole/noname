/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
import { addCartButton, bowlImg, buttonWrap, imgShowWrap, imgSliderWrap, inputQuantity, mainInfoWrap, packetImg, productLandingWrap, productTitle, sliderLink, subheading, testimonials } from "../styles/productStyles";

export default function Product({ title, description, merchId, imgBowl, imgPacket, addToCart, setLocalCart, localCart }: any) {
	const [quantity, setQuantity] = useState<number>(1);

	return (
		<div css={productLandingWrap}>
			<div css={imgSliderWrap}>
				<div css={buttonWrap}>
					<a href="#slide-1" css={sliderLink}>
						1
					</a>
					<a href="#slide-2" css={sliderLink}>
						2
					</a>
				</div>
				<div css={imgShowWrap}>
					<div css={bowlImg} id="slide-1">
						<Image
							src={imgBowl}
							alt="Bowl dog food"
							layout="fill"
							quality={50}
							blurDataURL="data:..." //automatically provided
							placeholder="blur" // Optional blur-up while loading
							// blurDataURL="data:..." automatically provided
							// placeholder="blur" // Optional blur-up while loading
						/>
					</div>
					<div css={packetImg} id="slide-2">
						<Image
							src={imgPacket}
							alt="Packet dog food"
							layout="fill"
							quality={50}
							blurDataURL="data:..." //automatically provided
							placeholder="blur" // Optional blur-up while loading
							// blurDataURL="data:..." automatically provided
							// placeholder="blur" // Optional blur-up while loading
						/>
					</div>
				</div>
			</div>
			<div css={mainInfoWrap}>
				<h1 css={productTitle}>{title} RECIPE</h1>
				<span css={subheading}>{description}</span>
				<br />
				<div
					css={css`
						margin: 6px 0;
					`}
				>
					<span>500g</span>
					<br />
					<span css={testimonials}>Read customer testimonials</span>
				</div>
				<div
					css={css`
						position: relative;
					`}
				>
					<input
						css={inputQuantity}
						type="number"
						min="1"
						max="10"
						value={quantity}
						onChange={(e: any) => {
							setQuantity(e.target.value);
						}}
					/>
					<button
						css={addCartButton}
						onClick={(e) => {
							addToCart(e, localCart.id, merchId, quantity, setLocalCart);
						}}
					>
						ADD TO BAG
						<span
							css={css`
								color: #2b6e6c;
								margin: 0 14px;
								font-size: 16px;
							`}
						>
							|
						</span>
						$7
					</button>
				</div>
			</div>
		</div>
	);
}

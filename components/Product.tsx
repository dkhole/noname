/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { useContext, useState, useRef } from "react";
import { addCartButton, bowlImg, buttonWrap, imgShowWrap, imgSliderWrap, inputQuantity, mainInfoWrap, packetImg, productLandingWrap, productTitle, subheading, testimonials } from "../styles/productStyles";
import CartContext from "../utils/CartContext";
import { addToCart } from "../utils/cartHelpers";

interface Props {
	title: string;
	description: string;
	merchId: string;
	imgBowl: StaticImageData;
	imgPacket: StaticImageData;
}

export default function Product({ title, description, merchId, imgBowl, imgPacket }: Props) {
	const [quantity, setQuantity] = useState<number>(1);
	const [currSlide, setCurrSlide] = useState(0);
	const scrollPos: any = useRef(null);

	const { localCart, setLocalCart } = useContext(CartContext);

	const slideOneStyles = css`
		background: ${currSlide == 0 ? `#f58f83` : `#2b6e6c`};
	`;

	const slideTwoStyles = css`
		background: ${currSlide == 1 ? `#f58f83` : `#2b6e6c`};
	`;

	return (
		<div css={productLandingWrap}>
			<div css={imgSliderWrap}>
				<div
					css={imgShowWrap}
					onScroll={(e) => {
						//console.log(scrollPos.current.getBoundingClientRect());
						if (scrollPos.current.getBoundingClientRect().height === 325) {
							//console.log("mobile");
							scrollPos.current.getBoundingClientRect().left >= 0 ? setCurrSlide(0) : setCurrSlide(1);
						} else {
							//console.log("desktop");
							scrollPos.current.getBoundingClientRect().left < 300 ? setCurrSlide(1) : setCurrSlide(0);
						}
					}}
				>
					<div css={bowlImg} id="slide-1" ref={scrollPos}>
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
				<div css={buttonWrap}>
					<a href="#slide-1" css={slideOneStyles}>
						1
					</a>
					<a href="#slide-2" css={slideTwoStyles}>
						2
					</a>
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

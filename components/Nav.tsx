/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import nonameLogo from "../imgs/noname.png";
import cart from "../imgs/cart.svg";
import { useState } from "react";

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const hamburgerSpanStyle = css`
		display: block;
		height: 2px;
		width: 33px;
		background: #2b6e6c;
		border-radius: 3px;
		margin: 7.5px 0;
	`;

	const navStyles = (isOpen: boolean) => css`
		font-family: Montserrat;
		background-color: #f4d4d0;
		height: 100%;
		width: 0;
		overflow-x: hidden;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		transition: 0.5s;
		${isOpen === true &&
		`
			width: 350px;
		`}
	`;

	const linkStyles = css`
		text-decoration: none;
		color: black;
		font-weight: 600;
	`;

	return (
		<nav
			css={css`
				position: fixed;
				background-color: #f2efe4;
				height: 70px;
				width: 100vw;
				display: flex;
				align-items: center;
				justify-content: space-around;
				z-index: 1;
			`}
		>
			<div css={navStyles(isNavOpen)}>
				<div
					css={css`
						position: relative;
						top: 10px;
						left: 20px;
						font-weight: 600;
						cursor: pointer;
					`}
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					x
				</div>
				<div
					css={css`
						width: 250px;
						height: 400px;
						display: flex;
						flex-direction: column;
						align-items: left;
						justify-content: space-around;
						text-align: left;
						margin: auto;
					`}
				>
					<a css={linkStyles} href="#">
						Shop All
					</a>
					<a css={linkStyles} href="#">
						About
					</a>
					<a css={linkStyles} href="#">
						Shipping + Delivery
					</a>
					<a css={linkStyles} href="#">
						Picky Pup Guarantee
					</a>
					<a css={linkStyles} href="#">
						Sustainability
					</a>
					<a css={linkStyles} href="#">
						Dog Health Tips
					</a>
				</div>
			</div>
			<div
				css={css`
					cursor: pointer;
				`}
				onClick={() => setIsNavOpen(!isNavOpen)}
			>
				<span css={hamburgerSpanStyle}></span>
				<span css={hamburgerSpanStyle}></span>
				<span css={hamburgerSpanStyle}></span>
			</div>
			<Image
				src={nonameLogo}
				alt="Noname logo"
				// width={500} automatically provided
				// height={500} automatically provided
				// blurDataURL="data:..." automatically provided
				// placeholder="blur" // Optional blur-up while loading
			/>
			<Image
				src={cart}
				alt="Shopping cart logo"
				css={css`
					cursor: pointer;
				`}
			/>
		</nav>
	);
}

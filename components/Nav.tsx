/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Image from "next/image";
import nonameLogo from "../imgs/noname.png";
import cart from "../imgs/cart.svg";
import CartItem from "./CartItem";
import Link from "next/link";
import { CartType } from "../utils/types";

interface Props {
	localCart: CartType
}

export default function Nav({ localCart }: Props) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

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

	const cartStyles = (isOpen: boolean) => css`
		font-family: Montserrat;
		background-color: white;
		height: 100%;
		width: 0;
		overflow-x: hidden;
		position: fixed;
		z-index: 1;
		top: 0;
		right: 0;
		transition: 0.5s;
		width: 0;
		border-left: 1px solid black;
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

	const toggleNav = () => {
		isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
	};

	const toggleCart = () => {
		isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
	};
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
				text-align: left;
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
					onClick={toggleNav}
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
						padding-top: 30px;
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
				onClick={toggleNav}
			>
				<span css={hamburgerSpanStyle}></span>
				<span css={hamburgerSpanStyle}></span>
				<span css={hamburgerSpanStyle}></span>
			</div>
			<Link href="/" passHref>
				<div>
					<Image
						src={nonameLogo}
						alt="Noname logo"
						// width={500} automatically provided
						// height={500} automatically provided
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
				</div>
			</Link>
			<Image
				src={cart}
				alt="Shopping cart logo"
				css={css`
					cursor: pointer;
				`}
				onClick={toggleCart}
			/>
			<div css={cartStyles(isCartOpen)}>
				<div
					css={css`
						position: relative;
						top: 17.5px;
						right: -310px;
						font-weight: 600;
						cursor: pointer;
						margin: 0;
						padding: 0;
					`}
					onClick={toggleCart}
				>
					x
				</div>
				<h3
					css={css`
						font-weight: 300;
						margin-top: 0;
						margin-left: 30px;
					`}
				>
					Your Cart
				</h3>
				<div
					css={css`
						border: 1px solid black;
						border-left: none;
						border-right: none;
						padding: 15px;
					`}
				>
					<span
						css={css`
							font-size: 10px;
						`}
					>
						FREE DELIVERY! ON SYDNEY ORDERS OVER $50
					</span>
				</div>
				{/**Cart items go here */}
				<div
					css={css`
						height: calc(100vh - 250px);
					`}
				>
					{
						localCart.lines ?
							(localCart.lines.edges.map((item: any, count: number) => {
								return <CartItem quantity={parseInt(item.node.quantity)} key={count} />;
							})) : <div></div>
					}

				</div>
				<div
					css={css`
						border-top: 1px solid black;
					`}
				>
					<div
						css={css`
							border-bottom: 1px solid black;
							padding: 15px 25px;
							font-size: 13px;
						`}
					>
						<span>SUBTOTAL</span>
						<span
							css={css`
								float: right;
								font-weight: 600;
							`}
						>
							$42
						</span>
					</div>
					<div
						css={css`
							height: 100%;
							padding: 20px 0;
							text-align: center;
						`}
					>{
						localCart.checkoutUrl ? (
							<Link href={localCart.checkoutUrl} passHref>
								<button
									css={css`
										background-color: #c3dedd;
										height: 40px;
										width: calc(100% - 50px);
										border: none;
										font-size: 12px;
										font-weight: 600;
										box-shadow: 4px 5px #2b6e6c;
										cursor: pointer;
									`}
								>
									CHECKOUT
								</button>
							</Link>) : (<div></div>)
					}
						
					</div>
				</div>
			</div>
		</nav>
	);
}

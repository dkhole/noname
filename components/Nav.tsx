/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import nonameLogo from "../public/imgs/noname.png";
import cart from "../public/imgs/cart.svg";
import CartItem from "./CartItem";
import Link from "next/link";
import { CartType } from "../utils/types";
import { mediaQuery } from "../utils/mediaQuery";

interface NavProps {
	localCart: CartType;
	setLocalCart: Function;
	removeLine: Function;
	updateLine: Function;
}

export default function Nav({ localCart, setLocalCart, removeLine, updateLine }: NavProps) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(0);

	useEffect(() => {
		let count = 0;
		if (localCart.lines.length > 0) {
			localCart.lines.map((line: any) => {
				count += line.node.quantity;
			});
			setCartQuantity(count);
		} else {
			setCartQuantity(0);
		}
	}, [localCart]);

	const hamburgerSpanStyle = css`
		display: block;
		height: 3px;
		width: 33px;
		background: #2b6e6c;
		border-radius: 3px;
		margin: 5px 0;
		@media (min-width: ${mediaQuery}) {
			height: 5px;
			width: 45px;
			margin: 7px 0;
		}
	`;

	const navStyles = (isOpen: boolean) => css`
		font-family: Montserrat;
		background-color: #519492;
		color: #f2efe4;
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
		height: 100vh;
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
		text-transform: uppercase;
		color: #f2efe4;
		font-weight: 600;
		letter-spacing: 1.25px;
		font-size: 17px;
		&:hover {
			color: #fcbdb1;
			/*color: white;*/
		}
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
				z-index: 2;
				text-align: left;
				@media (min-width: ${mediaQuery}) {
					height: 100px;
				}
			`}
		>
			<div css={navStyles(isNavOpen)}>
				<div
					css={css`
						position: relative;
						top: 10px;
						left: 20px;
						font-weight: 600;
						font-size: 20px;
						cursor: pointer;
						&:hover {
							color: red;
						}
					`}
					onClick={toggleNav}
				>
					X
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
					<Link href="/" passHref>
						<a css={linkStyles}>Home</a>
					</Link>

					<Link href="/products" passHref>
						<a css={linkStyles}>Shop All</a>
					</Link>

					<Link href="/faq" passHref>
						<a css={linkStyles}>FAQ</a>
					</Link>

					<Link href="/faq" passHref>
						<a css={linkStyles}>Shipping + Delivery</a>
					</Link>

					<Link href="/faq" passHref>
						<a css={linkStyles}>Picky Pup Guarantee</a>
					</Link>
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
				<div
					css={css`
						position: relative;
						height: 25px;
						width: 150px;
						@media (min-width: ${mediaQuery}) {
							line-height: auto;
							height: 35px;
							width: 200px;
						}
					`}
				>
					<Image
						src={nonameLogo}
						alt="Noname logo"
						css={css`
							cursor: pointer;
						`}
						layout="fill"
						objectFit="fill"
						quality={100}
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
				</div>
			</Link>
			{cartQuantity > 0 ? (
				<div
					css={css`
						position: relative;
					`}
				>
					<div
						css={css`
							position: absolute;
							top: 10px;
							right: -8px;
							z-index: 1;
							@media (min-width: ${mediaQuery}) {
								top: 15px;
								right: -5px;
							}
						`}
					>
						<span
							css={css`
								height: 17.5px;
								width: 17.5px;
								background-color: red;
								border-radius: 50%;
								display: inline-block;
								font-size: 10px;
								font-weight: 800;
								font-family: Montserrat;
								color: white;
								text-align: center;
								line-height: 18.5px;
								@media (min-width: ${mediaQuery}) {
									height: 20px;
									width: 20px;
									font-size: 12px;
									line-height: 19px;
								}
							`}
						>
							{cartQuantity}
						</span>
					</div>
					<div
						css={css`
							position: relative;
							height: 25px;
							width: 25px;
							cursor: pointer;
							@media (min-width: ${mediaQuery}) {
								height: 37.5px;
								width: 37.5px;
							}
						`}
					>
						<Image src={cart} alt="Shopping cart logo" onClick={toggleCart} layout="fill" />
					</div>
				</div>
			) : (
				<div
					css={css`
						position: relative;
						height: 25px;
						width: 25px;
						cursor: pointer;
						@media (min-width: ${mediaQuery}) {
							height: 37.5px;
							width: 37.5px;
						}
					`}
				>
					<Image src={cart} alt="Shopping cart logo" onClick={toggleCart} layout="fill" />
				</div>
			)}

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
						&:hover {
							color: red;
						}
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
						overflow-y: scroll;
						-ms-overflow-style: none;
						scrollbar-width: none;
						&::-webkit-scrollbar {
							display: none;
						}
					`}
				>
					{localCart.lines.length > 0 ? (
						localCart.lines.map((item: any, count: number) => {
							return <CartItem cartId={localCart.id} setLocalCart={setLocalCart} removeLine={removeLine} updateLine={updateLine} item={item} quantity={parseInt(item.node.quantity)} key={count} />;
						})
					) : (
						<div></div>
					)}
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
							{`$${localCart.totalAmount}`}
						</span>
					</div>
					<div
						css={css`
							height: 100%;
							padding: 20px 0;
							text-align: center;
						`}
					>
						{localCart.checkoutUrl ? (
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
										&:hover {
											background-color: #2b6e6c;
											color: white;
										}
									`}
								>
									CHECKOUT
								</button>
							</Link>
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

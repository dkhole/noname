/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Image from "next/image";
import beef from "../../public/imgs/Beef_trans.png";
import { useEffect, useState } from "react";
import { CartType } from "../../utils/types";
import { updateLocal, addToCart, removeLine, updateLine } from "../../utils/cartHelpers";
import Footer from "../../components/Footer";
import { mediaQuery } from "../../utils/mediaQuery";
import Email from "../../components/Email";

export default function Beef() {
	const [localCart, setLocalCart] = useState<CartType>({
		checkoutUrl: "",
		id: "",
		totalAmount: 0,
		lines: [],
	});

	useEffect(() => {
		const storage = window.localStorage;
		let cart: any = storage.getItem("nonameCart");
		//if cart doesnt exist create one save cart in state
		const createCart = async () => {
			const res = await fetch("http://localhost:3000/api/cart", { method: "POST", body: "" });
			const resNew = await res.json();
			if (resNew.data.cartCreate) {
				updateLocal(resNew.data.cartCreate.cart, setLocalCart);
			}
		};
		if (!cart) {
			//create cart, have to do this for async function
			const createCartFunction = async () => {
				await createCart();
			};
			createCartFunction();
		} else {
			//save in local state
			const parsedCart = JSON.parse(cart);
			setLocalCart(parsedCart);
		}
	}, []);

	return (
		<div
			css={css`
				font-family: Montserrat;
				text-align: center;
			`}
		>
			<Nav localCart={localCart} setLocalCart={setLocalCart} removeLine={removeLine} updateLine={updateLine} />
			<div css={css`
				padding-top: 110px;
				@media (min-width: ${mediaQuery}) {
					height: 30vh;
					padding-top: 225px;
					padding-bottom: 150px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}>
				<div
					css={css`
						position: relative;
						margin: auto;
						height: 200px;
						width: 520px;
						padding-top: 125px;
						margin-bottom: 50px;
						@media (min-width: ${mediaQuery}) {
							height: 350px;
							width: 550px;
							margin: 0;
							padding: 0;
						}
					`}
				>
					<Image
						src={beef}
						alt="Beef dog food"
						layout="fill"
						quality={50}
						blurDataURL="data:..." //automatically provided
						placeholder="blur" // Optional blur-up while loading
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
				</div>
				<div
					css={css`
						text-align: left;
						padding-left: 20px;
						margin-bottom: 40px;
						@media (min-width: ${mediaQuery}) {
							height: 170px;
							width: 340px;
							margin: 0; 
							padding: 0;
						}
					`}
				>
					<h1
						css={css`
							font-size: max(18px, 1.3vw);
							font-weight: 800;
							margin-bottom: 4px;
						`}
					>
						BEEF RECIPE
					</h1>
					<span
						css={css`
							font-size: 14px;
							font-weight: 600;
						`}
					>
						Our #1 Pick for Picky Eaters!
					</span>
					<br />
					<div
						css={css`
							margin: 6px 0;
						`}
					>
						<span>500g</span>
						<br />
						<span
							css={css`
								font-size: 12px;
								display: inline-block;
								transform: translateY(7.5px);
								font-weight: 600;
								text-decoration: underline;
								color: #f58f83;
								cursor: pointer;
							`}
						>
							Read customer testimonials
						</span>
					</div>
					<div
						css={css`
							position: relative;
						`}
					>
						<input
							css={css`
								text-align: center;
								width: 150px;
								margin-top: 20px;
								margin-right: 15px;
							`}
							type="number"
							min="1"
							max="10"
						/>
						<button
							css={css`
								background-color: #c3dedd;
								border: none;
								font-weight: 600;
								font-size: 11px;
								height: 30px;
								width: 160px;
								box-shadow: 3px 3px #2b6e6c;
								cursor: pointer;
								position: absolute;
								top: 17.5px;
								&:hover {
									background-color: #2b6e6c;
									color: white;
								}
							`}
							onClick={(e) => {
								addToCart(e, localCart.id, "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==", setLocalCart);
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
			<Info
				title="WHAT IS IT?"
				content="Our Chicken + Beef recipe is formulated for adult dogs. This recipe has a moderate fat content, making it a great all-rounder choice for most dogs, though not those with a history of severe pancreatitis or kidney disesase. It has a variety of vegetables, leafy greens and has fatty fish which contains EHAs + Omega 6 to support healthy eye and brain function."
				table={false}
			/>
			<Info title="INGREDIENTS" content="Chicken, Beef Liver, Beef Kidney, Spinach, Carrot, Egg, Pilchards, Strawberries, Blueberries, Blackberries, Deyhydrated Bone Meal, Basil, Calcified Seaweed, Kelp Powder, Extra Virgin Olive Oil." table={false} />
			<Info title="NUTRITIONAL BREAKDOWN" content="This recipe is formulated to meet the NRC nutritional guidelines. Read more about why we choose to meet NRC over AAFCO guidelines here." table={true} />
			<Email />
			<Footer />
		</div>
	);
}

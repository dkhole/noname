/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import FaqInfo from "../components/FaqInfo";
import { initialiseCart } from "../utils/cartHelpers";
import { CartType } from "../utils/types";
import Email from "../components/Email";
import { mediaQuery } from "../utils/mediaQuery";
import CartContext from "../utils/CartContext";

const Faq: NextPage = () => {
	const [localCart, setLocalCart] = useState<CartType>({
		checkoutUrl: "",
		id: "",
		totalAmount: 0,
		lines: [],
	});

	useEffect(() => {
		initialiseCart(setLocalCart);
	}, []);

	return (
		<CartContext.Provider
			value={{
				localCart,
				setLocalCart,
			}}
		>
			<div
				css={css`
					font-family: Montserrat;
				`}
			>
				<Nav localCart={localCart} />
				<div
					css={css`
						padding-top: 70px;
						@media (min-width: ${mediaQuery}) {
							padding-top: 100px;
						}
					`}
				>
					<h2
						css={css`
							margin: 0;
							padding: 40px;
							@media (min-width: ${mediaQuery}) {
								font-size: 35px;
								padding: 40px 80px;
							}
						`}
					>
						FAQs
					</h2>
					<div>
						<FaqInfo title="Product + Ingredients" blocks={[{ heading: "Coming Soon", body: "" }]} />
						<FaqInfo
							title="Shipping + Delivery"
							blocks={[
								{ heading: "How is my order delivered?", body: "No Name Dog Food is delivered frozen in insulated packaging. Don’t worry about being home to accept your order! Just pop the food in the freezer as soon as you can. " },
								{ heading: "When will my order be delivered?", body: "We offer free shipping on all orders over $50.\n\n Shipping on all orders under $50 is $10.\n\n Orders are delivered 2-4 business days from ordering. " },
							]}
						/>
						<FaqInfo
							title="Picky Pup Guarantee"
							blocks={[{ heading: "My dog is really picky!", body: "We’re so confident your pup will love our food, we’ll give you a 100% refund if they aren’t licking their bowls clean.\n\n This is only available on your first order and is limited at $50 AUD, excluding shipping. " }]}
						/>
						<FaqInfo title="No Dice" blocks={[{ heading: "", body: "No luck finding the answer to your question?\n\n Send us an email:\n kevin@nonamedogfood.com.au" }]} />
					</div>
				</div>
				<Email />
				<Footer />
			</div>
		</CartContext.Provider>
	);
};

export default Faq;

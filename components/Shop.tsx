/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import beef from "../imgs/beef.png";
import { CartType } from "../utils/types";
import Card from "./Card";

interface Props {
	addToCart: Function;
	localCart: CartType;
}

export default function Shop({ addToCart, localCart }: Props) {
	return (
		<div
			css={css`
				font-family: Montserrat;
				text-align: center;
			`}
		>
			<h1
				css={css`
					font-weight: 600;
					margin-bottom: 0;
				`}
			>
				Shop All
			</h1>
			<div>
				<Link href="/products/chicken-beef">
					<a
						css={css`
							text-decoration: none;
							cursor: pointer;
						`}
					>
						<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price={7} />
					</a>
				</Link>
				<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price={7} />
				<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price={7} />
			</div>
		</div>
	);
}

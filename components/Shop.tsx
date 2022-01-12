/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import beef from "../imgs/beef.png";
import Card from "./Card";

export default function Shop() {
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
						<Card img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					</a>
				</Link>
				<Card img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
				<Card img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
			</div>
		</div>
	);
}

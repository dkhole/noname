/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import beef from "../imgs/beef.png";

export default function Products() {
	return (
		<div>
			<Nav />
			<div
				css={css`
					padding: 0 35px;
					padding-top: 110px;
					font-family: Montserrat;
					text-align: center;
				`}
			>
				<h1
					css={css`
						margin: 0;
						padding: 0;
						font-weight: 600;
						font-size: 27px;
					`}
				>
					All Products
				</h1>
				<div>
					<Card img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
				</div>
			</div>
		</div>
	);
}

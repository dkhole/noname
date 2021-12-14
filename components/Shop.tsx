/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import beef from "../imgs/beef.png";

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
			<div
				css={css`
					height: 400px;
					width: 300px;
					margin: auto;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				`}
			>
				<Image
					src={beef}
					alt="Beef dog food"
					// blurDataURL="data:..." automatically provided
					// placeholder="blur" // Optional blur-up while loading
				/>
				<div>
					<h5
						css={css`
							margin-bottom: 2.5px;
						`}
					>
						BEEF + LAMB RECIPE
					</h5>
					<span
						css={css`
							font-size: 13px;
						`}
					>
						Our #1 Pick for Picky Eaters!
					</span>
					<br />
					<span
						css={css`
							font-weight: 600;
							font-size: 12px;
						`}
					>
						$7
					</span>
					<br />
					<span
						css={css`
							font-weight: 600;
							font-size: 12px;
						`}
					>
						ADD TO BAG
					</span>
				</div>
			</div>
		</div>
	);
}

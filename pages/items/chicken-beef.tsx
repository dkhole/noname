/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Nav from "../../components/Nav";
import Image from "next/image";
import beef from "../../imgs/beef.png";

export default function Shop() {
	return (
		<div
			css={css`
				font-family: Montserrat;
				text-align: center;
			`}
		>
			<Nav />
			<div
				css={css`
					padding-top: 125px;
					margin-bottom: 50px;
				`}
			>
				<Image
					src={beef}
					alt="Beef dog food"
					width={250}
					height={250}
					quality={100}
					// blurDataURL="data:..." automatically provided
					// placeholder="blur" // Optional blur-up while loading
				/>
			</div>
			<div
				css={css`
					text-align: left;
					padding-left: 20px;
				`}
			>
				<h1
					css={css`
						font-size: 18px;
						font-weight: 800;
						margin-bottom: 4px;
					`}
				>
					CHICKEN + BEEF RECIPE
				</h1>
				<span
					css={css`
						font-size: 14px;
						font-weight: 600;
					`}
				>
					Great for sensitive tummies.
				</span>
				<br />
				<div
					css={css`
						margin: 6px 0;
					`}
				>
					<span>500g</span>
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

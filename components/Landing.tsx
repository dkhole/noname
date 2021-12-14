/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import beefCut from "../imgs/beef-cut.png";

export default function Landing() {
	return (
		<>
			<div
				css={css`
					font-family: Montserrat;
					background-color: #f2efe4;
					color: #2b6e6c;
					height: 50vh;
					width: 100vw;
					display: flex;
					align-items: center;
					justify-content: space-between;
				`}
			>
				<div
					css={css`
						height: 200px;
						width: 200px;
						padding: 0 25px;
					`}
				>
					<div
						css={css`
							font-weight: 800;
							margin-bottom: 30px;
						`}
					>
						ROO + LAMB RECIPE
					</div>
					<div
						css={css`
							font-weight: 600;
							font-size: 20px;
							margin-bottom: 30px;
						`}
					>
						Boost your dog's immune system. Support growth + healing.
					</div>
					<button
						css={css`
							background: none;
							border: 2px solid #2b6e6c;
							color: #2b6e6c;
							font-weight: 800;
							font-size: 13px;
							height: 40px;
							width: 105px;
							box-shadow: 4px 5px #2b6e6c;
							cursor: pointer;
						`}
					>
						SHOP NOW
					</button>
				</div>
				<Image src={beefCut} alt="Beef dog food" />
			</div>
			<div
				css={css`
					background-color: #fffdf7;
					font-family: Montserrat;
					color: #2b6e6c;
					font-size: 20px;
					text-align: left;
					padding: 55px;
					line-height: 27.5px;
				`}
			>
				Honest, raw dog food,{" "}
				<span
					css={css`
						color: #f58f83;
					`}
				>
					without the mark-up.
				</span>{" "}
				Inspired by nature + informed by science, made with love on the Lower North Shore and delivering across Sydney.
			</div>
		</>
	);
}

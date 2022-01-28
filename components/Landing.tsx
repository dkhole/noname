/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import beef from "../public/imgs/Beef_trans.png";
import { mediaQuery } from "../utils/mediaQuery";

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
					padding-left: 25px;
					@media (min-width: ${mediaQuery}) {
						height: 100vh;
						padding: 0;
					}
				`}
			>
				<div
					css={css`
						height: 200px;
						width: max(200px, 35vw);
						padding: 0;
						@media (min-width: ${mediaQuery}) {
							margin-left: 10vw;
							margin-right: 0;
						}
					`}
				>
					<div
						css={css`
							font-weight: 800;
							margin-bottom: 30px;
							font-size: max(17px, 2vw);
							width: 800px;
						`}
					>
						ROO RECIPE
					</div>
					<div
						css={css`
							font-weight: 600;
							font-size: max(20px, 1vw);
							margin-bottom: 30px;
						`}
					>
						Boost your dog&apos;s immune system. Support growth + healing.
					</div>
					<Link href={"/products"} passHref>
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
								&:hover {
									background-color: #2b6e6c;
									color: white;
								}
							`}
						>
							SHOP NOW
						</button>
					</Link>
				</div>
				<div
					css={css`
						position: absolute;
						margin-top: 30px;
						right: -180px;
						height: 400px;
						width: 500px;
						@media (min-width: ${mediaQuery}) {
							margin-right: 12.5vw;
							width: 650px;
							height: 500px;
							margin-top: 0;
						}
					`}
				>
					<Image src={beef} alt="Beef dog food" priority={true} layout="fill"  />
				</div>
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
					@media (min-width: ${mediaQuery}) {
						padding: 75px 27vw;
						text-align: center;
					}
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

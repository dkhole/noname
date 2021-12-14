/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Email() {
	const inputStyles = css`
		background: none;
		color: #2b6e6c;
		font-size: 13px;
		border: solid 1px;
		height: 30px;
		width: 100px;
		padding: 0 15px;
	`;

	return (
		<div
			css={css`
				font-family: Montserrat;
				text-align: center;
				background-color: #fffdf7;
				color: #2b6e6c;
				padding: 30px 34px;
			`}
		>
			<span
				css={css`
					font-weight: 800;
					text-decoration: underline #f58f83;
					text-decoration-thickness: 5px;
				`}
			>
				GET 20% OFF YOUR FIRST ORDER!
			</span>
			<div
				css={css`
					padding: 30px 10px 0;
					display: flex;
					justify-content: space-around;
				`}
			>
				<input placeholder="Human's name" css={inputStyles} />
				<input placeholder="Dog's name" css={inputStyles} />
			</div>
			<div
				css={css`
					padding: 20px 10px 0;
					display: flex;
					justify-content: space-around;
					margin-bottom: 30px;
				`}
			>
				<input placeholder="Email address" css={inputStyles} />
				<input placeholder="Post code" css={inputStyles} />
			</div>
			<button
				css={css`
					background-color: #c3dedd;
					color: #2b6e6c;
					font-weight: 600;
					font-size: 14px;
					height: 35px;
					padding: 10px;
					border: none;
					cursor: pointer;
				`}
			>
				FEED MY DOG
			</button>
		</div>
	);
}

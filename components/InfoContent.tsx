/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mediaQuery } from "../utils/mediaQuery";

interface Props {
	title: string;
	content: string;
}

export default function InfoContent({ title, content }: Props) {
	return (
		<>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: auto;
					width: 100%;
					padding: 20px 25px;
				`}
			>
				<h5
					css={css`
						margin: 0;
						padding: 0;
						font-size: max(13px, 1vw);
						@media (min-width: ${mediaQuery}) {
							padding-bottom: 10px;
						}
					`}
				>
					{title}
				</h5>
				<i
					css={css`
						border: solid black;
						border-width: 0 3px 3px 0;
						display: inline-block;
						padding: 3px;
						transform: rotate(45deg);
						-webkit-transform: rotate(45deg);
						margin-right: 65px;
					`}
				></i>
			</div>
			<div
				css={css`
					padding: 0 25px;
					font-size: max(13px, 0.9vw);
					padding-bottom: 20px;
				`}
			>
				{content}
			</div>
		</>
	);
}

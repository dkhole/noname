/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { mediaQuery } from "../utils/mediaQuery";

interface FaqInfoProps {
	title: string;
	blocks: any[];
}

export default function FaqInfo({ title, blocks }: FaqInfoProps) {
	const [isInfoOpen, setIsInfoOpen] = useState(false);

	const infoStyles = (isOpen: boolean) => css`
		max-height: 600px;
		width: 100%;
		text-align: left;
		padding-bottom: 10px;
		transition: 0.5s;
		overflow: hidden;
		cursor: pointer;
		@media (min-width: ${mediaQuery}) {
			padding-left: 50px;
		}
		${isOpen === false &&
		`
            max-height: 60px;
        `}
	`;

	const toggleOpen = () => {
		isInfoOpen ? setIsInfoOpen(false) : setIsInfoOpen(true);
	};
	return (
		<div css={infoStyles(isInfoOpen)} onClick={toggleOpen}>
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
						font-size: 17px;
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
						@media (min-width: ${mediaQuery}) {
							margin-right: 115px;
						}
					`}
				></i>
			</div>
			<div
				css={css`
					padding: 0 25px;
					font-size: 13px;
					padding-bottom: 20px;
				`}
			>
				{blocks.map((block: any, index: number) => {
					return (
						<div key={index}>
							<h4>{block.heading}</h4>
							<span
								css={css`
									font-size: 12px;
									white-space: pre-line;
								`}
							>
								{block.body}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

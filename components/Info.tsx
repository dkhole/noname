/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { mediaQuery } from "../utils/mediaQuery";
import InfoContent from "./InfoContent";

interface Props {
	title: string;
	content: string;
	table: boolean;
}

export default function Info({ title, content, table }: Props) {
	const [isInfoOpen, setIsInfoOpen] = useState(false);

	const infoStyles = (isOpen: boolean) => css`
		max-height: 600px;
		width: 100%;
		border-top: 1px solid black;
		text-align: left;
		padding-bottom: 10px;
		transition: 0.5s;
		overflow: hidden;
		cursor: pointer;
		@media (min-width: ${mediaQuery}) {
			padding-left: 20vw;
			padding-right: 20vw;
			padding-bottom: 20px;
			width: calc(100% - 40vw);
		}
		${isOpen === false &&
		`
            max-height: 45px;
			@media (min-width: ${mediaQuery}) {
			}
        `}
	`;

	const infoLast = (isOpen: boolean) => css`
		max-height: 600px;
		width: 100%;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		text-align: left;
		padding-bottom: 10px;
		transition: 0.75s;
		overflow: hidden;
		cursor: pointer;
		@media (min-width: ${mediaQuery}) {
			padding-left: 20vw;
			padding-right: 20vw;
			padding-bottom: 20px;
			width: calc(100% - 40vw);
		}
		${isOpen === false &&
		`
            max-height: 45px;
        `}
	`;

	const cellStyle = (end: boolean) => css`
		border-right: 1px solid #2b6e6c;
		border-top: 1px solid #2b6e6c;
		padding: 10px;
		${end === true &&
		`
            border-right: none;
        `}
	`;

	const toggleOpen = () => {
		isInfoOpen ? setIsInfoOpen(false) : setIsInfoOpen(true);
	};
	if (!table) {
		return (
			<div css={infoStyles(isInfoOpen)} onClick={toggleOpen}>
				<InfoContent title={title} content={content} />
			</div>
		);
	} else {
		return (
			<div css={infoLast(isInfoOpen)} onClick={toggleOpen}>
				<InfoContent title={title} content={content} />
				<table
					css={css`
						margin: 0 20px;
						font-size: max(10px, 1vw);
						border-spacing: 0;
						border-collapse: collapse;
					`}
				>
					<tbody>
						<tr>
							<td css={cellStyle(false)}>*Dry Matter: Excludes moisture to make it more comparable to kibble</td>
							<td css={cellStyle(false)}>Average Composition (As Fed)</td>
							<td css={cellStyle(true)}>Average Composition (Dry Matter)</td>
						</tr>
						<tr>
							<td css={cellStyle(false)}>Crude Protein</td>
							<td css={cellStyle(false)}>14.12%</td>
							<td css={cellStyle(true)}>50.22%</td>
						</tr>
						<tr>
							<td css={cellStyle(false)}>Crude Fat</td>
							<td css={cellStyle(false)}>9.24%</td>
							<td css={cellStyle(true)}>32.83%</td>
						</tr>
						<tr>
							<td css={cellStyle(false)}>Crude Carbohydrates</td>
							<td css={cellStyle(false)}>2.07%</td>
							<td css={cellStyle(true)}>7.92%</td>
						</tr>
						<tr>
							<td css={cellStyle(false)}>Crude Fibre</td>
							<td css={cellStyle(false)}>1.00%</td>
							<td css={cellStyle(true)}>3.76%</td>
						</tr>
						<tr>
							<td css={cellStyle(false)}>Ash</td>
							<td css={cellStyle(false)}>1.48%</td>
							<td css={cellStyle(true)}>5.28%</td>
						</tr>
						<tr>
							<td css={cellStyle(false)}>Moisture</td>
							<td css={cellStyle(false)}>72.09%</td>
							<td css={cellStyle(true)}>0.00%</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

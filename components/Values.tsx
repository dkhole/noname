/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Values() {
	const valueNumStyles = css`
		position: absolute;
		top: 0;
		left: -40px;
		font-weight: 800;
		font-size: 50px;
		color: rgba(245, 143, 131, 0.37);
	`;
	return (
		<>
			<div
				css={css`
					font-family: Montserrat;
					text-align: left;
					padding: 25px 50px 50px;
					background-color: #fffdf7;
				`}
			>
				<h1
					css={css`
						font-weight: 600;
						margin: 0;
						margin-bottom: 7px;
					`}
				>
					Our Values
				</h1>
				<div
					css={css`
						position: relative;
						padding: 20px 0;
						font-size: 14px;
					`}
				>
					<div css={valueNumStyles}>01</div>
					<span
						css={css`
							font-weight: 600;
						`}
					>
						100% Human Quality
					</span>
					<br />
					<br />
					<span>
						The pet food industry isn’t legally regulated in Australia, which means the ingredients used in commercial pet food are often those that are ‘not fit for human consumption’. We’ll only ever use human-quality ingredients, because if we wouldn’t eat it, we wouldn’t feed it to
						our dogs either.{" "}
					</span>
				</div>
				<div
					css={css`
						position: relative;
						padding: 20px 0;
						font-size: 14px;
					`}
				>
					<div css={valueNumStyles}>02</div>
					<span
						css={css`
							font-weight: 600;
						`}
					>
						Transparent Pricing
					</span>
					<br />
					<br />
					<span>We believe owners have the right to know what their dog’s food costs to make. We reveal all the costs behind all our food - from the ingredients to labor to transport. </span>
				</div>
				<div
					css={css`
						position: relative;
						padding: 20px 0;
						font-size: 14px;
					`}
				>
					<div css={valueNumStyles}>03</div>
					<span
						css={css`
							font-weight: 600;
						`}
					>
						Inspired by Nature, Informed by Science
					</span>
					<br />
					<br />
					<span>Our recipes are formulated by pet nutritionists to ensure that they fit your dog’s ancestral diet. We use raw, whole foods - just as nature intended.</span>
				</div>
			</div>
			<div
				css={css`
					font-family: Montserrat;
					text-align: center;
					background-color: #f2efe4;
					color: #2b6e6c;
					padding: 30px 34px;
				`}
			>
				<h1
					css={css`
						font-weight: 600;
						margin: 0 0 30px 0;
					`}
				>
					Testimonials
				</h1>
				<span
					css={css`
						font-size: 18px;
						line-height: 22.5px;
					`}
				>
					Hiro has been eating No Name for a month now and I can report that his coat is smoother + shinier, he’s full of energy and so much happier!
				</span>
				<br />
				<br />
				<span>- Monica</span>
				<div
					css={css`
						font-weight: 800;
						font-size: 11px;
						margin-top: 25px;
						&:hover {
							text-decoration: underline;
							text-decoration-color: #f58f83;
							text-decoration-thickness: 4px;
							cursor: pointer;
						}
					`}
				>
					READ MORE
				</div>
			</div>
		</>
	);
}

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Footer() {
	return (
		<div
			css={css`
				font-family: Montserrat;
				background-color: #f2efe4;
				display: flex;
				font-size: 13px;
			`}
		>
			<div
				css={css`
					padding: 20px 50px 0;
				`}
			>
				<h4>THE USEFUL BITS</h4>
				<span>Contact Us</span>
				<br />
				<span>FAQ</span>
				<br />
				<span>Shipping</span>
				<br />
				<span>Picky Pup Guarantee</span>
			</div>
			<div
				css={css`
					padding: 20px 0 50px 20px;
				`}
			>
				<h4>THE FRIENDLY BITS</h4>
				<span>Our Story</span>
				<br />
				<span>Testimonials</span>
			</div>
		</div>
	);
}

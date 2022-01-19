/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

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
				<span
					css={css`
						cursor: not-allowed;
					`}
				>
					Contact Us
				</span>
				<br />
				<Link href="/faq">
					<a
						css={css`
							text-decoration: none;
							cursor: pointer;
							&:hover {
								color: #f58f83;
							}
						`}
					>
						<span>FAQ</span>
					</a>
				</Link>

				<br />
				<Link href="/faq">
					<a
						css={css`
							text-decoration: none;
							cursor: pointer;
							&:hover {
								color: #f58f83;
							}
						`}
					>
						<span>Shipping</span>
					</a>
				</Link>

				<br />
				<Link href="/faq">
					<a
						css={css`
							text-decoration: none;
							cursor: pointer;
							&:hover {
								color: #f58f83;
							}
						`}
					>
						<span>Picky Pup Guarantee</span>
					</a>
				</Link>
			</div>
			<div
				css={css`
					padding: 20px 0 50px 20px;
				`}
			>
				<h4>THE FRIENDLY BITS</h4>
				<span
					css={css`
						cursor: not-allowed;
					`}
				>
					Our Story
				</span>
				<br />
				<span
					css={css`
						cursor: not-allowed;
					`}
				>
					Testimonials
				</span>
			</div>
		</div>
	);
}

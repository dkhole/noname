/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import lamb from "../../public/imgs/Lamb_trans.png";
import lambPack from "../../public/imgs/Lamb_trans_packaged.png";
import { CartType } from "../../utils/types";
import { mainWrap } from "../../styles/productStyles";
import Product from "../../components/Product";
import CartContext from "../../utils/CartContext";
import useInitialiseCart from "../../utils/useInitialiseCart";

export default function Lamb() {
	const [localCart, setLocalCart]: [CartType, React.Dispatch<React.SetStateAction<CartType>>] = useInitialiseCart();

	return (
		<CartContext.Provider
			value={{
				localCart,
				setLocalCart,
			}}
		>
			<div css={mainWrap}>
				<Nav localCart={localCart} />
				<Product title="LAMB" description="Boost Immunity + Healing" merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTA0ODEwOTg3NTM1NA==" imgBowl={lamb} imgPacket={lambPack} />
				<Info
					title="WHAT IS IT?"
					content="Our Chicken + Beef recipe is formulated for adult dogs. This recipe has a moderate fat content, making it a great all-rounder choice for most dogs, though not those with a history of severe pancreatitis or kidney disesase. It has a variety of vegetables, leafy greens and has fatty fish which contains EHAs + Omega 6 to support healthy eye and brain function."
					table={false}
				/>
				<Info title="INGREDIENTS" content="Chicken, Beef Liver, Beef Kidney, Spinach, Carrot, Egg, Pilchards, Strawberries, Blueberries, Blackberries, Deyhydrated Bone Meal, Basil, Calcified Seaweed, Kelp Powder, Extra Virgin Olive Oil." table={false} />
				<Info title="NUTRITIONAL BREAKDOWN" content="This recipe is formulated to meet the NRC nutritional guidelines. Read more about why we choose to meet NRC over AAFCO guidelines here." table={true} />
			</div>
		</CartContext.Provider>
	);
}

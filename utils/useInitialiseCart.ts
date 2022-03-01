import { useEffect, useState } from "react";
import { CartType } from "./types";
import { initialiseCart } from "./cartHelpers";

export default function useInitaliseCart(): ([CartType, React.Dispatch<React.SetStateAction<CartType>>]) {
	const [localCart, setLocalCart] = useState<CartType>({
		checkoutUrl: "",
		id: "",
		totalAmount: 0,
		lines: [],
	});

	useEffect(() => {
		initialiseCart(setLocalCart);
	}, []);

    return [localCart, setLocalCart];
}
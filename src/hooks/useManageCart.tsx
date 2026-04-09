import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { CartItem } from "@/src/helpers/types";

const useManageCart = (product?: CartItem) => {
  const { addItem, inCart, updateItemQuantity, getItem } = useCart();

  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);

  useEffect(() => {
    if (product && getItem(product.id)?.quantity === product.quantity) {
      setIsAddToCartDisabled(true);
    } else {
      setIsAddToCartDisabled(false);
    }
  }, [getItem, product]);

  const addToCart = (product: CartItem) => {
    if (inCart(product.id)) {
      const cartQuantity: number | undefined = getItem(product.id).quantity;
      cartQuantity && cartQuantity < product.quantity
        ? updateItemQuantity(product.id, cartQuantity + 1)
        : setIsAddToCartDisabled(true);
    } else {
      addItem(product);
    }
  };

  return {
    addToCart,
    isAddToCartDisabled,
  };
};

export default useManageCart;

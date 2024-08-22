import React, { useState, createContext } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(2);

    const promoCodes = {
        "DISCOUNT10": 0.1,
        "DISCOUNT20": 0.2,
        "FREESHIP": 0,
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = prev[itemId] ? prev[itemId] + 1 : 1;
            return { ...prev, [itemId]: newCount };
        });
    };

    const removeFromCart = (itemId, removeAll = false) => {
        setCartItems((prev) => {
            if (removeAll) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            } else {
                const newCount = prev[itemId] - 1;
                if (newCount <= 0) {
                    const { [itemId]: _, ...rest } = prev;
                    return rest;
                }
                return { ...prev, [itemId]: newCount };
            }
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const clearCart = () => {
        setCartItems({});
    };

    const applyPromoCode = (code) => {
        const discountValue = promoCodes[code.toUpperCase()];
        if (discountValue !== undefined) {
            setPromoCode(code);
            setDiscount(discountValue);
            if (code.toUpperCase() === "FREESHIP") {
                setDeliveryFee(0);
            } else {
                setDeliveryFee(2);
            }
        } else {
            alert("Invalid promo code");
        }
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        clearCart,
        promoCode,
        discount,
        applyPromoCode,
        deliveryFee,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

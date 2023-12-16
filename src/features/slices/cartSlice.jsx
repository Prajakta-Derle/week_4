import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      try {
        const existingProduct = state.cart.find(
          (product) =>
            product.id === newProduct.id &&
            product.size === newProduct.size &&
            product.color === newProduct.color
        );

        if (existingProduct) {
          existingProduct.amount++;
          existingProduct.totalPrice += newProduct.price;
          state.totalAmount++;
          state.totalPrice += newProduct.price;
        } else {
          state.cart.push({
            id: newProduct.id,
            price: newProduct.price,
            size: newProduct.size,
            amount: 1,
            img: newProduct.img,
            totalPrice: newProduct.price,
            name: newProduct.name,
            text: newProduct.text,
            color: newProduct.color,
          });
          state.totalAmount++;
          state.totalPrice += newProduct.price;
        }
      } catch (err) {
        console.error("Error adding to cart:", err);
      }
    },
    removeFromCart(state, action) {
      const productToRemove = action.payload;
      try {
        const existingProduct = state.cart.find(
          (product) =>
            product.id === productToRemove.id &&
            product.size === productToRemove.size &&
            product.color === productToRemove.color
        );

        if (existingProduct.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productToRemove.id ||
              product.size !== productToRemove.size ||
              product.color !== productToRemove.color
          );
          state.totalAmount--;
          state.totalPrice -= productToRemove.price;
        } else {
          existingProduct.amount--;
          existingProduct.totalPrice -= productToRemove.price;
          state.totalAmount--;
          state.totalPrice -= productToRemove.price;
        }
      } catch (err) {
        console.error("Error removing from cart:", err);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

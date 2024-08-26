import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")): 0,
    total: localStorage.getItem("total") ?  JSON.parse(localStorage.getItem("total")) : 0,
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state , action){
            const course = action.payload;
            const index = state.cart.findIndex((item) => item._id === course._id);

            // if course is placed in the cart
            if(index >= 0){
                toast.error("Course is already having in the cart");
                return;
            }

            // pushing the course to the cart array
            state.cart.push(course);
            state.totalItems += 1;
            state.total += course.price;


            // now updating the localStorage 

            localStorage.setItem("cart" , JSON.stringify(state.cart));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            localStorage.setItem("total", JSON.stringify(state.total));

            // send the success toast

            toast.success("Item added to cart");
        },

        removeFromCart(state, action){
            const courseId = action.payload;
            const index = state.cart.findIndex((item) => item._id === courseId);

            if(index >= 0){
                state.cart.total -= state.cart[index].price;
                state.cart.splice(index, 1);
                state.totalItems -= 1;

                // updating the localStorage

                localStorage.setItem("cart" , JSON.stringify(state.cart))
                localStorage.setItem("totalItems" , JSON.stringify(state.totalItems))
                localStorage.setItem("total" , JSON.stringify(state.total))
            }

            // success toast

            toast.success("Item removed");
        },

        resetCart(state, action){
            state.cart = [];
            state.totalItems = 0;
            state.total = 0;

            // updating the localStorage

            localStorage.setItem("cart" , JSON.stringify(state.cart))
            localStorage.setItem("totalItems" , JSON.stringify(state.totalItems))
            localStorage.setItem("total" , JSON.stringify(state.total))

            toast.success("Cart Reset successfully")
        }

    }
})

export const {addToCart, removeFromCart, resetCart} = cartSlice.actions;

export default cartSlice.reducer
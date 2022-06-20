import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./feature/authSlice";
import CartReducer from "./feature/cartSlice";
import ShelterReducer from "./feature/shelterSlice";
import PetReducer from "./feature/petSlice";
import DonateReducer from "./feature/donateSlice";

export default configureStore({
  reducer: {
    cart: CartReducer,
    auth: AuthReducer,
    shelter: ShelterReducer,
    pet: PetReducer,
    donate: DonateReducer,
  },
});

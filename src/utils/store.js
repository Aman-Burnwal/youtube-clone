import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./serachslice";

const store = configureStore(
    {

        reducer: {
            app: appslice,
            search: searchslice,
        },

    },
);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./serachslice";
import liveCommentSlice from "./liveCommentSlice";

const store = configureStore(
    {

        reducer: {
            app: appslice,
            search: searchslice,
            livecomments: liveCommentSlice,
        
        },

    },
);

export default store;

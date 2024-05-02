import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "Searchslice",
    initialState: {
       
        
    },
    reducers: {
        cacheResults: (state, action) => {
            // Return a new state object with payload properties merged
            Object.assign(state, action.payload);

            let keys = Object.keys(state);
            if (keys.length == 5) delete state[keys[0]];
            console.log(keys);
        },

        clearCache: (state) => {
            // return state
            state.length = 0;
        }
    }
});

export const { cacheResults, clearCache } = SearchSlice.actions;

export default SearchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { userName } from "../assets/constantData";

const liveCommentSlice = createSlice({
    name: 'livecomments',
    initialState: {
        liveMessage: [],
    },
    reducers: {
        pushLiveMessage: (state, action) => {
            // console.log(action.payload);
            if (typeof action.payload === 'string') {
                state.liveMessage.unshift({ name: userName, message: action.payload });
            } else {
                const name = action.payload[0] || userName;
                const message = action.payload[1];
                state.liveMessage.unshift({ name: name, message: message });
            }
            
            
            if (state.liveMessage.length > 10) {
                state.liveMessage = state.liveMessage.slice(0, 10);
            }
 
        }
    }
});

export const { pushLiveMessage } = liveCommentSlice.actions;
export default liveCommentSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchLogin } from "./LoginAPI";

const initialState = {
    login: {
        name: "",
        sessionId: ""
    }    
}

export const loginAsync = createAsyncThunk(
    'login/fetchLogin',
    async (data) => {
        const response = await fetchLogin(data);
        return response;
    }
)

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        doLogin: (state, action) => {
            state.login = action.payload;
        },
        logout: (state) => {
            state.login = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, () => {
                
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.login = action.payload;
            })
            .addCase(loginAsync.rejected, (state) => {
                state.login = "실패";
            })
    }
})

export const getLoginInfo = (state) => state.login;

export const { doLogin, logout } = loginSlice.actions;

export default loginSlice.reducer;
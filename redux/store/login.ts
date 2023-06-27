import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  
type User = {
    id: number,
    email: string,
    name: string,
    lastName: string,
    photo: string,
    token: string,
    onLine: boolean
}

interface UserLogger{
    userLogged: User
}

export const UserloggedSlice = createSlice({
    name: "UserLogged",
    initialState: {
        userLogged:{ 
            id: 0,
            email: "",
            name: "",
            lastName: "",
            photo: "",
            token: "",
            onLine: false 
        }
    },
    reducers: { 
        setUserLogged: (state:UserLogger, action: PayloadAction<User>) => { 
            state.userLogged = action.payload;
        }
    }
});

export const { setUserLogged } = UserloggedSlice.actions;
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCurrentUser } from "./userSlice";

export const getUserData = createAsyncThunk('user', async (_void, { dispatch }) => {
    try {
        const baseUrl =  import.meta.env.VITE_BACKEND_API_URL
        const response = await fetch(`${baseUrl}/auth/get/me`, {
          method: "GET",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const res = await response.json();
  
        if (response.ok) {
            dispatch(setCurrentUser({...res}));
        }
        else{
          dispatch(setCurrentUser(null));
        }
      } catch (error) {
        dispatch(setCurrentUser(null));
        console.log('Fetch error:', error);
      }
  });
  
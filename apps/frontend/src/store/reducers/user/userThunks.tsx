import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCurrentUser } from "./userSlice";

export const getUserData = createAsyncThunk('user', async ( dispatch) => {
    try {
        const baseUrl =  import.meta.env.VITE_BACKEND_API_URL
        const response = await fetch(`${baseUrl}/auth/get/me`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const res = await response.json();
        console.log(res);
  
        if (response.ok) {
            dispatch(setCurrentUser({ ...response.body }));
        }
      } catch (error) {
        console.log('Fetch error:', error);
      }
  });
  
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const Registerurl: string = `${import.meta.env.VITE_API_BASE_URLS}/auth/register`;
const Loginurl = `${import.meta.env.VITE_API_BASE_URLS}/auth/login`;

type authtype = {
  name?: string;
  email?: string;
  token?: any;
  hashedPassword?: string;
  user?: any;
  tweet?: any;
  userInfo?: { id: string };
  id?: string;
  location?: string;
  image?: string;
  isAuthenticated?: boolean
}

type KnownError = {
  errorMessage: string;
}

export const registerUser = createAsyncThunk<authtype, authtype, {
  rejectValue: KnownError,

}>(
  "registerUser",
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(Registerurl, registerData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("User", JSON.stringify(response.data.token));
      return {
        token: response.data.token,
        user: response.data.user
      }
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const loginUser = createAsyncThunk<authtype, { email?: string, hashedPassword?: string, name?: string }, {
  rejectValue: KnownError,
}>(
  "loginUser",
  async (loginData, { rejectWithValue }) => {
    try {

      const response = await axios.post(Loginurl, loginData);
      localStorage.setItem("User", JSON.stringify(response.data.token));
      localStorage.setItem("User", JSON.stringify(response.data.user));
      return {
        user: response.data.user,
        token: response.data.token,
        
      }
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



// update user profile
export const UpdateProfile = createAsyncThunk<{
  rejectValue: KnownError,
}, authtype>(
  "UpdateProfile",
  async (profiledata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { id: string }, token: string } };
      // console.log(auth.token)
      // console.log(profiledata?.id)

      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/user/profile/${profiledata?.id}`,
        profiledata
      );
      return response.data.updatedUser;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



// Get user in the application
export const GetAllUserProfile = createAsyncThunk<string, { name?: string, id?: string }, {
  rejectValue: KnownError,
}>(
  "getalluserprofile",
  async ({ name, id }, { rejectWithValue, getState }) => {
    const { auth } = getState() as { auth: { userInfo: { id: string }, token: string } };

    const config = {
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      let url;
      if (id) {
        url = `${import.meta.env.VITE_API_BASE_URLS}/user?id=${id}`;
      } else if (name) {
        url = `${import.meta.env.VITE_API_BASE_URLS}/user?name=${name}`;
      } else {
        url = `${import.meta.env.VITE_API_BASE_URLS}/user`;
      }
      const response = await axios.get(
        url, config
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


export const GetAllUserSearch = createAsyncThunk<string, { name?: string, id?: string }, {
  rejectValue: KnownError,
}>(
  "getalluserSearch",
  async ({ name, id }, { rejectWithValue, getState }) => {
    const { auth } = getState() as { auth: { userInfo: { id: string }, token: string } };

    const config = {
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      let url;
      if (id) {
        url = `${import.meta.env.VITE_API_BASE_URLS}/user?id=${id}`;
      } else if (name) {
        url = `${import.meta.env.VITE_API_BASE_URLS}/user?name=${name}`;
      } else {
        url = `${import.meta.env.VITE_API_BASE_URLS}/user`;
      }
      const response = await axios.get(
        url, config
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const GetSingleUserProfile = createAsyncThunk<string, { name?: string, id?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleUserProfile",
  async ({ name, id }, { rejectWithValue, getState }) => {
    const { auth } = getState() as { auth: { userInfo: { id: string }, token: string } };

    const config = {
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user/${id}`, config
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);
// Get user in the application
export const GetUserCookie = createAsyncThunk<string, { data: string }, {
  rejectValue: KnownError,
}>(
  "GetUserCookie",
  async (data, { rejectWithValue, getState }) => {

    try {


      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/user/check-cookie`,
        null
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);
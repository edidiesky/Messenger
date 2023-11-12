import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const messageurl: string = `${import.meta.env.VITE_API_BASE_URLS}/message`;
type messagedatatype = {
  body?: string;
  image?: any;
  _id?: string;
  userId?: string;
  conversationId?: string;
}

interface messagePayload {
  userIdIncludedInBookmarksArray: boolean;
  messagedetails: any;
}


type KnownError = {
  errorMessage: string;
}

export const getAllmessage = createAsyncThunk<{
  rejectValue: KnownError,

}>(
  "getAllmessage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(messageurl);
      localStorage.setItem("message", JSON.stringify(response.data.message));
      return response.data.message;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Create User message
export const Createmessage = createAsyncThunk<{
  rejectValue: KnownError,
}, messagedatatype>(
  "Createmessage",
  async (messageData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };

      const response2 = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${messageData?.conversationId}`,
        messageData,
        config
      );
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${messageData?.conversationId}`,
        config
      )
      return response.data.messages;


      // console.log(messageData)
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User message
export const Deletemessage = createAsyncThunk<string, { Detailsdata: string }, {
  rejectValue: KnownError,
}>(
  "deletemessage",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { token: string } };
      // console.log(auth.token)
      // console.log(messagedata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${Detailsdata}`,
        config
      );
      return Detailsdata;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Getmessage Details
export const GetSinglemessageDetails = createAsyncThunk<string, { conversationId ?:string}, {
  rejectValue: KnownError,
}>(
  "GetSinglemessageTweetDetails",
  async ({conversationId}, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: {token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${conversationId}`,
        config
      );

      return response.data.messages

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Get User message
export const GetUsermessage = createAsyncThunk<{
  rejectValue: KnownError,
}, { _id?: any }>(
  "GetUsermessage",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { messageInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/message/user/${Detailsdata}`,
        config
      );
      return response.data.message;
      // console.log(Detailsdata)

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

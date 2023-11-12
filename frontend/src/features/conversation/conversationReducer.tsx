import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const conversationurl: string = `${import.meta.env.VITE_API_BASE_URLS}/conversation`;
type conversationdatatype = {
  conversation_text?: string;
  conversation_image?: any;
  _id?: string;
  senderId?: string;
  receiverId?: string;
  conversation_user_id?: string;
}

interface conversationPayload {
  userIdIncludedInBookmarksArray: boolean;
  conversationdetails: any;
}

type KnownError = {
  errorMessage: string;
}

// Create User conversation
export const Createconversation = createAsyncThunk<any, { conversationData?:{userId?:string}},{
  rejectValue: KnownError,
}>(
  "Createconversation",
  async ({conversationData}, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/conversation`,
        conversationData,
        config
      );
      return response.data.conversation;


      // console.log(conversationData)
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User conversation
export const Deleteconversation = createAsyncThunk<string, {
  Detailsdata
  : string
}, {
  rejectValue: KnownError,
}>(
  "deleteconversation",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { token: string } };
      // console.log(auth.token)
      // console.log(conversationdata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URLS}/conversation/${Detailsdata}`,
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


// Get User conversation
export const GetUsersMessageConversation = createAsyncThunk<
  string, { receiverId?: string },
{
  rejectValue: KnownError,
}>(
  "GetUserconversation",
  async ({receiverId}, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: {token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/conversation/${receiverId}`,
        config
      );
      return response.data?.conversation;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


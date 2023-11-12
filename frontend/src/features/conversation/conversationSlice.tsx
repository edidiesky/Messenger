import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  Createconversation, 
  Deleteconversation, 
  GetUsersMessageConversation
} from './conversationReducer'
const BookMarked = localStorage.getItem("isBookMarked");
const conversation = JSON.parse(localStorage.getItem("conversation") || 'false');


// Define a type for the conversation state
interface conversationState {
  conversationDetails?: any,
  conversation?: any,
  bookmarks?: any,
  isLiked?: Boolean,
  conversationisLoading?: Boolean,
  isBookMarked?: Boolean,
  conversationisSuccess?: Boolean,
  conversationisError?: Boolean,

  // conversationisLoading?: Boolean,
  // conversationisSuccess?: Boolean,
  // conversationisError?: Boolean,

  alertText?: any,
  showAlert?: Boolean,
  alertType?: string,


}

// Define the initial state of the conversation using that type
const initialState: conversationState = {
  conversationDetails: null,

  conversation: conversation ? conversation: [],
  bookmarks: [],


  conversationisLoading: false,
  conversationisSuccess: false,
  conversationisError: false,
  isBookMarked: false,
  isLiked: false,

  // conversationisLoading: false,
  // conversationisSuccess: false,
  // conversationisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

}

export const conversationSlice = createSlice({
  name: 'conversation',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearconversation: (state, action) => {
      state.conversationDetails = null
      state.conversation = []
      state.conversationisLoading = false
      state.isBookMarked = false
      state.conversationisSuccess = false
      state.conversationisError = false
      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
  },
  extraReducers: (builder) => {
    // // registration build case
    builder.addCase(GetUsersMessageConversation.pending, (state, action) => {
      state.conversationisLoading = true
    })
    builder.addCase(GetUsersMessageConversation.fulfilled, (state, action) => {
      state.conversationisSuccess = true
      state.conversationisLoading = false
      state.conversationDetails = action.payload
    })
    builder.addCase(GetUsersMessageConversation.rejected, (state, action) => {
      state.conversationisSuccess = false
      state.conversationisError = true
      state.conversationisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })



    // create user conversation
    builder.addCase(Createconversation.pending, (state, action) => {
      state.conversationisLoading = true

    })
    builder.addCase(Createconversation.fulfilled, (state, action) => {
      state.conversationDetails = action.payload
      state.alertText = 'conversation created succesfully'
      state.showAlert = true
      state.conversationisLoading = false

      state.alertType = 'success'
    })
    builder.addCase(Createconversation.rejected, (state, action) => {
      state.conversationisSuccess = false
      state.conversationisError = true
      state.conversationisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


    // Deleteconversation slice

    builder.addCase(Deleteconversation.pending, (state, action) => {

    })
    builder.addCase(Deleteconversation.fulfilled, (state, action) => {

      state.conversation = state.conversation.filter((x:any) => x._id !== action.payload);
    })
    builder.addCase(Deleteconversation.rejected, (state, action) => {
      state.conversationisSuccess = false
      state.conversationisError = true
      state.conversationisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


  },
})

export const { clearconversation } = conversationSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.conversation.value

export default conversationSlice.reducer
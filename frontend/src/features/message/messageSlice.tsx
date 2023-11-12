import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  Createmessage, 
  Deletemessage, 
  GetSinglemessageDetails, 
  GetUsermessage,
} from './messageReducer'
const BookMarked = localStorage.getItem("isBookMarked");


// Define a type for the message state
interface messageState {
  messageDetails?: any,
  message?: any,
  bookmarks?: any,
  messageisLoading?: Boolean,
  messageisSuccess?: Boolean,
  messageisError?: Boolean,

  alertText?: any,
  showAlert?: Boolean,
  alertType?: string,


}
interface MessageType {
  _id?: string
}

// Define the initial state of the message using that type
const initialState: messageState = {
  messageDetails: null,

  message: [],
  bookmarks: [],


  messageisLoading: false,
  messageisSuccess: false,
  messageisError: false,

  // messageisLoading: false,
  // messageisSuccess: false,
  // messageisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

}

export const messageSlice = createSlice({
  name: 'message',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearmessage: (state, action) => {
      state.messageDetails = null
      state.message = []
      state.messageisLoading = false
      state.messageisSuccess = false
      state.messageisError = false
      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
  },
  extraReducers: (builder) => {
    // // registration build case
    builder.addCase(GetUsermessage.pending, (state, action) => {
      state.messageisLoading = true
    })
    builder.addCase(GetUsermessage.fulfilled, (state, action) => {
      state.messageisSuccess = true
      state.messageisLoading = false
      state.message = action.payload
    })
    builder.addCase(GetUsermessage.rejected, (state, action) => {
      state.messageisSuccess = false
      state.messageisError = true
      state.messageisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })



    // create user message
    builder.addCase(Createmessage.pending, (state, action) => {
      state.messageisLoading = true

    })
    builder.addCase(Createmessage.fulfilled, (state, action) => {
      state.message = action.payload
      state.alertText = 'message created succesfully'
      state.showAlert = true
      state.messageisLoading = false

      state.alertType = 'success'
    })
    builder.addCase(Createmessage.rejected, (state, action) => {
      state.messageisSuccess = false
      state.messageisError = true
      state.messageisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // get single message slice

    builder.addCase(GetSinglemessageDetails.pending, (state, action) => {
      // state.messageisLoading = true
    })
    builder.addCase(GetSinglemessageDetails.fulfilled, (state, action) => {
      state.messageisSuccess = true
      state.messageisLoading = false
      state.message = action.payload
    })
    builder.addCase(GetSinglemessageDetails.rejected, (state, action) => {
      state.messageisSuccess = false
      state.messageisError = true
      state.messageisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // Deletemessage slice

    builder.addCase(Deletemessage.pending, (state, action) => {

    })
    builder.addCase(Deletemessage.fulfilled, (state, action) => {

      state.message = state.message.filter((x: MessageType) => x._id !== action.payload);
    })
    builder.addCase(Deletemessage.rejected, (state, action) => {
      state.messageisSuccess = false
      state.messageisError = true
      state.messageisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


  },
})

export const { clearmessage } = messageSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.message.value

export default messageSlice.reducer
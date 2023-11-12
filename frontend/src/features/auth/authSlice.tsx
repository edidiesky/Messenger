  import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GetAllUserProfile, GetAllUserSearch, GetSingleUserProfile, GetUserCookie, UpdateProfile, loginUser, registerUser } from './authReducer'


const userData = JSON.parse(localStorage.getItem("User") || 'false');
const usercookie = JSON.parse(localStorage.getItem("cookie") || 'false');
const userToken = localStorage.getItem("Usertoken");

// Define a type for the slice state
interface authState {
  userInfo?: any,
  userDetails?: any,
  users?: any,
  token?: any,
  isAuthenticated?: boolean,
  registerisLoading?: boolean,
  registerisSuccess?: boolean,
  registerisError?: boolean,

  profilepictureisLoading?: boolean,
  profilepictureisSuccess?: boolean,

  loginisLoading?: boolean,
  loginisSuccess?: boolean,
  loginisError?: boolean,

  userprofileisLoading?: boolean,
  userprofileisSuccess?: boolean,
  userprofileisError?: boolean,

  alertText?: any,
  showAlert?: boolean,
  alertType?: string,

  isLoading?: boolean,
  isSuccess?: boolean,
  userSearchResult?: any,


}

// Define the initial state using that type
const initialState: authState = {
  userInfo: userData ? userData : null,
  userDetails: null,
  users: [],
  token: userToken ? userToken : "",
  isAuthenticated: usercookie ? usercookie : false,

  registerisLoading: false,
  registerisSuccess: false,
  registerisError: false,

  loginisLoading: false,
  loginisSuccess: false,
  loginisError: false,

  profilepictureisLoading: false,
  profilepictureisSuccess: false,


  userprofileisLoading: false,
  userprofileisSuccess: false,
  userprofileisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

  isLoading: false,
  isSuccess: false,
  userSearchResult: [],
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearUserProfile: (state, action) => {
      state.registerisLoading = false
      state.registerisSuccess = false
      state.registerisError = false
      state.users = []
      state.userDetails = []

      state.loginisLoading = false
      state.loginisSuccess = false
      state.loginisError = false


      state.userprofileisLoading = false
      state.userprofileisSuccess = false
      state.userprofileisError = false

      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
    ClearUserInfo: (state, action) => {
      localStorage.removeItem("Usertoken");
      localStorage.removeItem("User");
      state.isLoading = false;
      state.alertType = "";
      state.showAlert = false;
      state.alertText = "";
    },

    ClearAuthAlert: (state, action) => {
      state.loginisLoading = false;
      state.alertType = "";
      state.showAlert = false;
      state.alertText = "";
    },
  },

  extraReducers: (builder) => {
    // registration build case
    builder.addCase(registerUser.pending, (state, action) => {
      state.registerisLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registerisSuccess = true
      state.registerisLoading = false
      state.userInfo = action.payload.user
      state.token = action.payload.token
      localStorage.setItem("User", JSON.stringify(action.payload.user))
      localStorage.setItem("Usertoken", action.payload.token);

      state.alertText = 'Registration succesfull.. redirectiing soon '
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerisSuccess = false
      state.registerisError = true
      state.registerisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // registration build case
    builder.addCase(loginUser.pending, (state, action) => {
      state.loginisLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginisSuccess = true
      state.loginisLoading = false
      state.userInfo = action.payload.user
      state.token = action.payload.token
      localStorage.setItem("User", JSON.stringify(action.payload.user))
      localStorage.setItem("Usertoken", action.payload.token)


      state.alertText = 'Login succesfull.. redirectiing soon '
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginisSuccess = false
      state.loginisError = true
      state.loginisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateProfile.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(UpdateProfile.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.userprofileisLoading = false
      state.userDetails = action.payload
      state.alertText = 'Profile Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
      localStorage.setItem("User", JSON.stringify(action.payload));
    })
    builder.addCase(UpdateProfile.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload
    })

    // Get all users 
    builder.addCase(GetAllUserProfile.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(GetAllUserProfile.fulfilled, (state, action) => {
      state.users = action.payload
      state.userprofileisLoading = false

      state.alertText = 'Profile Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(GetAllUserProfile.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload
    })

    // Get all users 
    builder.addCase(GetAllUserSearch.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(GetAllUserSearch.fulfilled, (state, action) => {
      state.userSearchResult = action.payload
      state.userprofileisLoading = false

      state.alertText = 'Profile Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(GetAllUserSearch.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload
    })

    builder.addCase(GetSingleUserProfile.pending, (state, action) => {
      // state.userprofileisLoading = true
    })
    builder.addCase(GetSingleUserProfile.fulfilled, (state, action) => {
      state.userDetails = action.payload
      state.alertText = 'Profile Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(GetSingleUserProfile.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload
    })

    // Get user cokkie

    // Get all users 
    builder.addCase(GetUserCookie.pending, (state, action) => {
    })
    builder.addCase(GetUserCookie.fulfilled, (state, action) => {
      state.users = action.payload
      localStorage.setItem("cookie", JSON.stringify(action.payload));
    })
    builder.addCase(GetUserCookie.rejected, (state, action) => {
    })

  },
})

export const { clearUserProfile, ClearUserInfo, ClearAuthAlert } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer
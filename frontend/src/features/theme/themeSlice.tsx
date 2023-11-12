import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface themeState {
  backgroundtheme: string,
  colortheme: string,
}
const backtheme = localStorage.getItem("theme");
const colortheme = localStorage.getItem("colortheme");

// Define the initial state using that type
const initialState: themeState = {
  backgroundtheme:backtheme?backtheme: '',
  colortheme: colortheme ? colortheme: '',

}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getBackgroundTheme: (state, action) => {
      let theme: string = 'light-theme'

      if (theme === 'light-theme') {
        const storedTheme = localStorage.getItem('theme');

        theme = storedTheme !== null ? storedTheme : 'light-theme';
        state.backgroundtheme = theme
      }
      state.backgroundtheme = theme


    },
    getColorTheme: (state, action) => {
      let theme: string = 'blue-theme'

      if (theme === 'blue-theme') {
        const storedTheme = localStorage.getItem('colortheme');

        theme = storedTheme !== null ? storedTheme : 'blue-theme';
        state.colortheme = theme
      }
      state.colortheme = theme
    },
    setBackgroundThemes: (state, action) => {
      state.backgroundtheme = action.payload
    },
    setColorTheme: (state, action) => {
      state.colortheme = action.payload
    },
  }
})

export const { setColorTheme, setBackgroundThemes, getBackgroundTheme, getColorTheme } = themeSlice.actions

export default themeSlice.reducer
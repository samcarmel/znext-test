import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// The top level state for the app, generic things that are not specific to particular components
export type AppState = {
  darkMode: 'yes' | 'no'
  history: string[]
}

export const initalAppState: AppState = {
  darkMode: 'no',
  history: [],
}

// Create a redux slice `https://redux-toolkit.js.org/api/createSlice`
export const appSlice = createSlice({
  // The name of the slice, will be prefixed to the actions created by the slice.
  name: 'app',
  initialState: initalAppState,
  // Define the actions and the reducers
  reducers: {
    addPathToHistory: (state, action: PayloadAction<string>) => {
      state.history = [...state.history, action.payload]
    },
    setDarkMode: (state, action: PayloadAction<'yes' | 'no'>) => {
      state.darkMode = action.payload
    },
  },
})

// CreateSlice creates the actions
export const { addPathToHistory, setDarkMode } = appSlice.actions

// CreateSlice will create the reducer
export const appReducer = appSlice.reducer

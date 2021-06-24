import { appReducer } from './app/appReducer'
import { combineReducers } from '@reduxjs/toolkit'

// Combine all the reducers into the main one
export const rootReducer = combineReducers({
  app: appReducer,
})

// The type of the whole state of the app, taken from all the reducers
export type RootState = ReturnType<typeof rootReducer>

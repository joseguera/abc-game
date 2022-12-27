import { configureStore } from '@reduxjs/toolkit'
import playingReducer from '../features/playing/playingSlice'

export const store = configureStore({
  reducer: {
    playing: playingReducer
  }
})
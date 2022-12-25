import { configureStore } from '@reduxjs/toolkit'
import playingReducer from '../features/playing/playingSlice'

export default configureStore({
  reducer: {
    playing: playingReducer
  }
})
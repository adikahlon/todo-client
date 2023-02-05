import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './reducers/todoSlider';
export default configureStore({
 reducer: {// allows you create n number of sliders
     toDo: toDoReducer
  ,
}})
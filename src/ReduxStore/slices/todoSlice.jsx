import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
        state.tasks.push(action.payload);
        // state.tasks = []
    },    
    deleteTask: (state, action) => {
        const {id} = action.payload;
        state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    editTask: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask } = TaskSlice.actions;
export default TaskSlice.reducer;

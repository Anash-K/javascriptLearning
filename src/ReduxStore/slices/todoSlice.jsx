import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const taskToEdit = state.tasks.find((task) => task.id === id);
      if (taskToEdit) {
        taskToEdit.text = text;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = TaskSlice.actions;
export default TaskSlice.reducer;

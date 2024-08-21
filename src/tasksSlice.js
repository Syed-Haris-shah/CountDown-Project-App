import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: {
      CountDown: [],
      inProgress: [],
      completed: []
    }
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      const { id, content, section } = action.payload;
      state.tasks[section].push({ id, content });
    },
    moveTask: (state, action) => {
      const { source, destination, task } = action.payload;
      state.tasks[source] = state.tasks[source].filter((t) => t.id !== task.id);
      state.tasks[destination].push(task);
    }
  }
});

export const { setTasks, addTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
  
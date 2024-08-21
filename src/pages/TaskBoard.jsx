import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { addTask, moveTask } from "../tasksSlice";
import { db, collection, addDoc, getDocs } from "../firebase";

function TaskBoard() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [newTask, setNewTask] = useState("");
  const [selectedSection, setSelectedSection] = useState("todo");

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasksData = { CountDown: [], inProgress: [], completed: [] };
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        tasksData[data.section].push({ id: doc.id, content: data.content });
      });
      dispatch({ type: "tasks/setTasks", payload: tasksData });
    };

    fetchTasks();
  }, [dispatch]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    const task = tasks[source.droppableId].find((t) => t.id === draggableId);
    dispatch(moveTask({ source: source.droppableId, destination: destination.droppableId, task }));
  };

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;
    const docRef = await addDoc(collection(db, "tasks"), {
      content: newTask,
      section: selectedSection
    });
    dispatch(addTask({ id: docRef.id, content: newTask, section: selectedSection }));
    setNewTask("");
  };

  return (
    <div className="task-div">
  <div className="input-task">
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="New Task"
    />
    <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
      <option value="CountDown">CountDown</option>
      <option value="inProgress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
    <button onClick={handleAddTask}>Add Task</button>
  </div>
  <DragDropContext onDragEnd={handleDragEnd}>
    {["CountDown", "inProgress", "completed"].map((section) => (
      <Droppable droppableId={section} key={section}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="droppable">
            <h2 className="drop">{section.replace(/([A-Z])/g, "$1")}</h2>
            {tasks[section].map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable"
                  >
                    {task.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    ))}
  </DragDropContext>
</div>

  );
}

export default TaskBoard;


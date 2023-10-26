import { useEffect, useState } from "react";
import { getIn, deleteTask } from "../api/tasks.api.js";
import { Link } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  useEffect(() => {
    async function loadTasks() {
      const res = await getIn();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      // Call the deleteTask function and pass the task ID
      await deleteTask(taskId);

      // After successfully deleting the task, update the state by fetching tasks again
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);

      // Close the delete confirmation dialog
      setTaskIdToDelete(null);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error deleting task:", error);
    }
  };

  const showDeleteModal = (taskId) => {
    setTaskIdToDelete(taskId);
  };

  // Split the tasks into two arrays: falseTasks and trueTasks
  const falseTasks = tasks.filter((task) => !task.done);
  const trueTasks = tasks.filter((task) => task.done);

  // Concatenate falseTasks and trueTasks in the desired order
  const allTasks = falseTasks.concat(trueTasks);

  return (
    <div className="container">
      {allTasks.length === 0 ? (
        <div className="text-center">
          <p><strong>You havent created a task yet.</strong></p>
          <Link to="/tasks-create" className="btn btn-primary">
            Create Task
          </Link>
        </div>
      ) : (
        allTasks.map((task) => (
          <div
            key={task.id}
            className={`card mb-3 ${
              task.done
                ? "bg-secondary text-white border border-primary border-4"
                : "custom-card bg-info border border- border-4"
            }`}
          >
            <div className="card-body">
              <h1 className="card-title">{task.title}</h1>
              <p className="card-text">{task.description}</p>
            </div>
            <div className="d-flex justify-content-end">
              <div className="card-body2">
                <div className="ml-auto">
                  <Link
                    to={`/tasks/update/${task.id}`}
                    className="btn btn-danger mr-2"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => showDeleteModal(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            {/* Confirmation dialog */}
            {taskIdToDelete === task.id && (
              <div className="delete-confirmation-modal">
                <div className="card-body">
                  <p>
                    <strong>Are you sure you want to delete this task?</strong>
                  </p>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDelete(taskIdToDelete)}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setTaskIdToDelete(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;

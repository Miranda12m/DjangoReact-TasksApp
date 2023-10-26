import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TaskUpdateScreen() {
  const { taskId } = useParams();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskDone, setIsTaskDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTaskData() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/tasks/api/s1/tasks/${taskId}/`
        );
        const taskData = response.data;
        setTaskTitle(taskData.title);
        setTaskDescription(taskData.description);
        setIsTaskDone(taskData.done);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    }
    fetchTaskData();
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTaskData = {
      title: taskTitle,
      description: taskDescription,
      done: isTaskDone,
    };

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/tasks/api/s1/tasks/${taskId}/`,
        updatedTaskData
      );
      console.log("Task updated:", response.data);

      // Use the navigate function to redirect to the task list
      navigate('/tasks');
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <p>Task Update</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            <h1>
            Task Title
            </h1>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <h1>
            Task Description
            </h1>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 border border-primary border-4">
          <Form.Check
            type="checkbox"
            label="Is Task Done?"
            checked={isTaskDone}
            onChange={(e) => setIsTaskDone(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default TaskUpdateScreen;

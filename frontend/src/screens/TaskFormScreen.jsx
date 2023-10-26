import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function TaskFormScreen() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskDone, setIsTaskDone] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const taskData = {
      title: taskTitle,
      description: taskDescription,
      done: isTaskDone,
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/tasks/api/s1/tasks/', taskData);
      console.log('Task created:', response.data);

      // Use the navigate function to redirect to /tasks
      navigate('/tasks');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            <h1>Task Title</h1>
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
            <h1>Task Description</h1>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5} // Adjust the number of rows to make it bigger
            placeholder="Enter task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Is Task Done?"
            checked={isTaskDone}
            onChange={(e) => setIsTaskDone(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

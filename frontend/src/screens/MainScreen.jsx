import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const bannerStyle = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1585427915733-13af3fcb80b0?auto=format&fit=crop&q=80&w=1934&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
  color: "white",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
};

const h1Style = {
  fontSize: "2.5rem",
  marginBottom: "10px",
  // Add a text shadow to make the text stand out
  textShadow: "2px 2px 4px rgba(0, 0, 0, 5.5)",
};

const h1Style2 = {
  textShadow: "2px 2px 4px rgba(0, 0, 0, 5.5)",
};

export function MainScreen() {
  return (
    <div>
      <div
        style={bannerStyle}
        className="banner border border-primary border-4"
      >
        <div className="container">
          <h1 style={h1Style}>Django-React Task App!</h1>
          <p style={h1Style2}>
            <strong>
              Fullstack CRUD App using Django REST Framework, Vite-React.js and
              Django SQLite
            </strong>
          </p>
          <p style={h1Style2}>
            <strong>by Tadeo Miranda</strong>
          </p>
          <Link to="/tasks-create" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </div>
      </div>
      <br />
      <Card className="text-center border border-primary border-4">
      <Card.Body>
        <Card.Title>More information</Card.Title>
        <Card.Text>
         Click on the navbar icons to navigate to the task list and task creation, after the task creation you can visit the task list to update, delete or mark a task as a complete. <br /> You can find more info on the <Link to="https://github.com/Miranda12m?tab=repositories" target="_blank">Github Repository</Link>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

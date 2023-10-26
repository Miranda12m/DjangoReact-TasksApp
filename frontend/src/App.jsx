import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TaskScreen } from "./screens/taskscreen";
import { TaskFormScreen } from "./screens/TaskFormScreen";
import { MainScreen } from "./screens/MainScreen";
import TaskUpdateScreen from "./screens/TasksUpdateScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" element={<MainScreen />} />
            <Route path="/tasks" element={<TaskScreen />} />
            <Route path="/tasks-create" element={<TaskFormScreen />} />
            <Route path="/tasks/update/:taskId" element={<TaskUpdateScreen />} />
          </Routes>
        </Container>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;

// Importing CSS file and components
import "./App.css";
import { Header } from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// App component
function App() {
  // Rendering the components
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

// Exporting the App component
export default App;

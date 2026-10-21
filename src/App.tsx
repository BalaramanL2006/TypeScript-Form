import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./components/StudentContext";
import StudentForm from "./components/Register";
import StudentDetails from "./components/StudentDetails";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/details" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
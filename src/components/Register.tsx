import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "./StudentContext";

function Register() {
  const context = useContext(StudentContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  if (!context) return null;

  const { setStudent } = context as {
    setStudent: (student: {
      name: string;
      email: string;
      department: string;
    }) => void;
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStudent({
  name: name,
  email: email,
  department: department,
});

navigate("/details");
  }

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          placeholder="Enter your department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
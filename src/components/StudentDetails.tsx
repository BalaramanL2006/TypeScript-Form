import { useStudent } from "./StudentContext";

function StudentDetails() {
  const { student } = useStudent();

  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Department: {student.department}</p>
    </div>
  );
}

export default StudentDetails;
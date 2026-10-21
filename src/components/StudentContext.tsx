import { createContext, useContext, useState } from "react";

export const StudentContext = createContext<any>(null);

export function StudentProvider({ children }: any) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    department: "",
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}
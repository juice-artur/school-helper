import { Container, Typography, Button } from "@mui/material";
import { SchoolClass } from "../../TypesAndInterfaces";
import MultipleValuesInput from "../DirectorPageContent/MultipleValuesInput";
import { useState } from "react";

interface TeacherClassProps {
  schoolClass: SchoolClass;
}

export const TeacherClass = ({ schoolClass }: TeacherClassProps) => {
  const [values, setValues] = useState<string[]>([]);
  const inviteStudents = async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_API_URL;
    const emails = values.map((v) => {
      return { userEmail: v, classId: schoolClass.id };
    });
    await fetch(`${baseUrl}/invite/student`, {
      method: "POST",
      body: JSON.stringify(emails),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => setValues([]));
  };
  return (
    <Container>
      <Typography variant="h1" color="black">
        {schoolClass?.title}
      </Typography>
      <MultipleValuesInput
        sxStyles={{ paddingTop: 4, paddingBottom: 2 }}
        values={values}
        setValues={setValues}
      />
      <Button variant="contained" onClick={() => inviteStudents()}>
        Додати учнів
      </Button>
    </Container>
  );
};

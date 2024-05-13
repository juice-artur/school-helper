import { Box, Button, TextField, Typography } from "@mui/material";
import { deleteUserData } from "../../store/reducers/user/userThunks";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ChangeEvent, useState } from "react";
import { setCurrentUser } from "../../store/reducers/user/userSlice";
import { UserAvatar } from "./UserAvatar";

export const ProfileStudent = () => {
  const dispatch = useAppDispatch();
  const handleExit = async () => {
    dispatch(deleteUserData());
  };
  const user = useAppSelector(state => state.user.data)

  const baseUrl = import.meta.env.VITE_BACKEND_API_URL;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const uploadFile = async ()=>{
    const formData = new FormData();
    formData.append("file", selectedFile!);
    const response = await fetch(`${baseUrl}/file/upload`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }
      return await response.json();
  }

  const handleSubmit = async () => {
    if(selectedFile)
    {
        uploadFile().then(r => {
            return fetch(`${baseUrl}/user`, {
              method: "PATCH",
              body: JSON.stringify({ avatarKey: r.name }),
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async (r) => {
              const res = await r.json();
              setCurrentUser(res);
            });
          });
    }


}

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files)
    {
        const file = event.target.files[0];
        setSelectedFile(file);
    }

  };

  return (
    <>
        { user &&
      <><Typography variant="h4">Профіль</Typography><Box
                  sx={{
                      boxShadow: "0px 4px 15px rgba(3, 2, 2, 0.25)",
                      borderRadius: "15px",
                  }}
                  maxWidth={800}
                  border={"none"}
                  margin={"20px"}
                  display="flex"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  padding={"30px"}
              >
                  <Box
                      sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                      }}
                  >


                      <UserAvatar selectedFile={selectedFile} handleFileChange={handleFileChange} />
                      <Box
                          sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              padding: "10px 50px",
                          }}
                      >
                          <Typography>Прізвище</Typography>
                          <Typography>Ім'я</Typography>
                          <Typography>По батькові</Typography>
                          <Typography>Телефон</Typography>
                      </Box>
                      <Box
                          sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                          }}
                      >
                          <TextField defaultValue={`${user?.lastName}`} size="small"></TextField>
                          <TextField defaultValue={`${user?.firstName}`} size="small"></TextField>
                          <TextField size="small"></TextField>
                          <TextField size="small"></TextField>
                      </Box>
                  </Box>

                  <Button
                      onClick={handleSubmit}
                      sx={{
                          marginTop: '8px',
                          maxWidth: "210px",
                          alignSelf: "flex-end",
                          backgroundColor: "#423A34",
                          borderRadius: "50px",
                          color: "white",
                          padding: "8px 30px",
                          textTransform: "none",
                      }}
                  >
                      <Typography>Зберегти</Typography>
                  </Button>
                  <Button
                      onClick={handleExit}
                      sx={{
                          marginTop: '8px',
                          maxWidth: "210px",
                          alignSelf: "flex-end",
                          backgroundColor: "#423A34",
                          borderRadius: "50px",
                          color: "white",
                          padding: "8px 30px",
                          textTransform: "none",
                      }}
                  >
                      <Typography>Вихід</Typography>
                  </Button>
              </Box></>
}
    </>
  );

};

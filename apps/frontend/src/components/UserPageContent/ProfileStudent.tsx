/* eslint-disable @typescript-eslint/no-explicit-any */import { Box, Button, TextField, Typography } from "@mui/material";
import { deleteUserData } from "../../store/reducers/user/userThunks";
import { useAppDispatch } from "../../hooks";
import { useState } from "react";
import { setCurrentUser } from "../../store/reducers/user/userSlice";
import { UserAvatar } from "./UserAvatar";

export const ProfileStudent = () => {
  const dispatch = useAppDispatch();
  const handleExit = async () => {
    dispatch(deleteUserData());
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    const baseUrl = import.meta.env.VITE_BACKEND_API_URL;
    try {
      const response = await fetch(`${baseUrl}/file/upload`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }
      await response.json().then((r) => {
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
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <Typography variant="h4">Профіль</Typography>
      <Box
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
            <TextField size="small"></TextField>
            <TextField size="small"></TextField>
            <TextField size="small"></TextField>
            <TextField size="small"></TextField>
          </Box>
        </Box>

        <Button
          onClick={handleSubmit}
          sx={{
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
      </Box>
    </>
  );
};

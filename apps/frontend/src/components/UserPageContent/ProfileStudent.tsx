/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, TextField, Typography,  } from "@mui/material";
import school from "../../assets/img/shool.jpg";
import { deleteUserData } from "../../store/reducers/user/userThunks";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useState } from "react";

export const ProfileStudent = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.data)
  const handleExit = async () => {
    dispatch(deleteUserData());
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
        alert("Please select a file.");
        return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    const baseUrl =  import.meta.env.VITE_BACKEND_API_URL
    try {
        const response = await fetch(`${baseUrl}/file/upload`, {
            method: 'POST',
            body: formData,
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Failed to upload file');
        }
        const res = await response.json().then(r =>{
            console.log(JSON.stringify({ avatarKey: r.url.name }));
            console.log(r.url.name);
            
            fetch(`${baseUrl}/user`, {
                method: 'PATCH',
                body: JSON.stringify({ avatarKey: r.url.name }),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        })
        console.log(res.name);

    } catch (error) {
        console.error('Error uploading file:', error.message);
    }
};

  const [selectedFile, setSelectedFile] = useState(null);

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
          <Box
            sx={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundColor: "black",
              color: "white",
              overflow: "hidden",
              position: "relative",
            }}
          >
                {selectedFile ? (
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "50%",
                        }}
                    />
                ) : (
                    <img
                        src={user?.avatarKey ? `${import.meta.env.VITE_S3_BASE_URL}/${user.avatarKey}` :  school}
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "50%",
                        }}
                    />
                )}
            <input
              type="file"
              onChange={handleFileChange}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            ></input>
          </Box>

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

        <Button onClick={handleSubmit}
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
          <Typography >Зберегти</Typography>
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

import { Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography, formControlClasses } from "@mui/material"
import { useState } from "react";
import { SchoolValues } from "../TypesAndInterfaces";

  
  

export const CreateSchool = () => {

  const districts = [
    'Вінницька',
    'Волинська',
    'Дніпропетровська',
    'Донецька',
    'Житомирська',
    'Закарпатська',
    'Запорізька',
    'Івано-Франківська',
    'Київська',
    'Кіровоградська',
    'Луганська',
    'Львівська',
    'Миколаївська',
    'Одеська',
    'Полтавська',
    'Рівненська',
    'Сумська',
    'Тернопільська',
    'Харківська',
    'Херсонська',
    'Хмельницька',
    'Черкаська',
    'Чернівецька',
    'Чернігівська',
    'АР Крим'
  ];

  const [formState, setFormState] = useState<SchoolValues>({
    title: '',
    description: '',
    district: '',
    city: '',
    index: '',
    phone: '',
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      });
  }

  const handleSelect = (event: SelectChangeEvent<string>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formState)
  }

  return(
    <>
      <Container sx={{ width: '70%', display: 'flex', flexDirection: 'column', margin: '50px auto'}}> 
        <Typography variant='h4' textAlign={'center'} margin='50px'>Реєстрація школи</Typography>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)} style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column'}}>
          <TextField onChange={handleFormChange} name='title' id="outlined-basic" label="Назва навчального закладу" variant="outlined" required sx={{margin:'25px 0'}}/>
          <TextField onChange={handleFormChange} name='description' id="outlined-multiline-flexible" label="Опис" variant="outlined" required multiline sx={{margin:'25px 0'}}/>
          <InputLabel id="demo-simple-select-label">Область</InputLabel>
          <Select
            value={formState.district}
            name='district'
            onChange={handleSelect}
          >
            {districts.map((district) => <MenuItem value={district}>{district}</MenuItem>)} 
          </Select>
          <TextField onChange={handleFormChange} name='city' id="outlined-basic" label="Населений пункт" variant="outlined" required sx={{margin:'25px 0'}}/>
          <TextField onChange={handleFormChange} name='index' id="outlined-basic" label="Індекс" variant="outlined" required sx={{margin:'25px 0'}}/>
          <TextField onChange={handleFormChange} name='phone' id="outlined-basic" label="Телефон контактної особи" variant="outlined" required sx={{margin:'25px 0'}}/>
          <Button variant="contained" type="submit" sx={{margin:'25px 0'}}>Зареєструвати</Button>        
        </form>
      </Container>
    </>
  )
}
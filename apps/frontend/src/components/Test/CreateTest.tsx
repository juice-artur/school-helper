import { Box, Button, Container, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { TestQuestion } from "../../TypesAndInterfaces"

export const CreateTest = () => {
    const [counter, setCounter] = useState<number>(1)
    return (
        <Container sx={{margin: '25px auto', maxWidth: '1200px'}}>
            <Typography variant='h3' color='black' sx={{margin: '25px 0'}}>Створення тесту</Typography>
            <CreateQuestion counter={counter}></CreateQuestion>
        </Container>
    )
}



export const CreateQuestion = ({ counter }: { counter: number }) => {
    const [formState, setFormState] = useState<TestQuestion>({
        text: '',
        answer: [],
        answerOptions: [],
        questionType: '',
        quizId: '',
        score: '',
    });

    const [isActive, setIsActive] = useState<boolean>(true)

    const questionTypes = [
        'вибір однієї правильної відповіді',
        'вибір декількох відповідей',
        'власна відповідь',
    ];

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSelect = (event: SelectChangeEvent<string>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleAddOption = () => {
        setFormState({
            ...formState,
            answerOptions: [...formState.answerOptions, ''],
        });
    };

    const handleRemoveOption = (index: number) => {
        const newOptions = [...formState.answerOptions];
        newOptions.splice(index, 1);
        setFormState({
            ...formState,
            answerOptions: newOptions,
        });
    };

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...formState.answerOptions];
        newOptions[index] = value;
        setFormState({
            ...formState,
            answerOptions: newOptions,
        });
    };

    const handleAddAnswer = () => {
        setFormState({
            ...formState,
            answer: [...formState.answer, ''],
        });
    };

    const handleRemoveAnswer = (index: number) => {
        const newAnswers = [...formState.answer];
        newAnswers.splice(index, 1);
        setFormState({
            ...formState,
            answer: newAnswers,
        });
    };
    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...formState.answer];
        newAnswers[index] = value;
        setFormState({
            ...formState,
            answer: newAnswers,
        });
    };

    const handleSubmit = () => {
        setIsActive(false)
        console.log(formState)
    }

    return (
        <Container sx={{display: 'flex', flexDirection: 'row', maxWidth: '1200px', justifyContent: 'space-between', border: '1px solid gray'}}>
            <Box sx={{backgroundColor: '#423A34', padding: '10px', color:'white', width: '50px', height: '50px', textAlign: 'center'}}>
                <Typography variant='h4' color='white'>{counter}.</Typography>
            </Box>

            <Box sx={{width: '1000px'}}>
            <form>
                <Typography variant='h4'>Питання тесту</Typography>
                <TextField
                    onChange={handleFormChange}
                    name='text'
                    id="outlined-multiline-flexible"
                    variant='outlined'
                    multiline
                    required
                    sx={{ margin: '25px 0',
                        width: '100%'
                     }}
                />
                <Typography variant='h4'>Вид тесту</Typography>
                <Select
                    value={formState.questionType}
                    name='questionType'
                    sx={{ margin: '25px 0',
                        width: '100%'
                    }}
                    onChange={handleSelect}
                >
                    {questionTypes.map((question) => (
                        <MenuItem key={question} value={question}>
                            {question}
                        </MenuItem>
                    ))}
                </Select>
                {(formState.questionType === 'вибір однієї правильної відповіді' || formState.questionType === 'вибір декількох відповідей') && (
                    <>
                        <Typography variant='h4'>Варіанти відповіді</Typography>
                        {formState.answerOptions.map((option, index) => (
                            <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                                <TextField
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                    name={`option-${index}`}
                                    id={`option-${index}`}
                                    label={`Варіант відповіді ${index + 1}`}
                                    variant='outlined'
                                    required
                                    sx={{ margin: '25px 0', width: '100%' }}
                                />
                                <Button sx={{borderRadius: '20%', width: '10px', heigth: '10px', backgroundColor: '#423A34', color: 'white', padding: '15px 0'}} onClick={() => handleRemoveOption(index)}>х</Button>
                            </Box>
                        ))}
                        <Button sx={{backgroundColor: '#423A34', color: 'white', margin: '25px 0'}} onClick={handleAddOption}>Додати варіант відповіді</Button>
                    </>
                )}
                <Typography variant='h4'>
                    Правильна відповідь
                </Typography>
                {(formState.questionType === 'вибір декількох відповідей' ? 
                    <>
                    {formState.answer.map((answer, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                value={answer}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                name={`answer-${index}`}
                                id={`answer-${index}`}
                                label={`Правильна відповідь ${index + 1}`}
                                variant='outlined'
                                required
                                sx={{ margin: '25px 0', width: '100%' }}
                            />
                            <Button sx={{ borderRadius: '20%', width: '10px', height: '10px', backgroundColor: '#423A34', color: 'white', padding: '15px 0' }} onClick={() => handleRemoveAnswer(index)}>х</Button>
                        </Box>
                    ))}
                        <Button sx={{ backgroundColor: '#423A34', color: 'white', margin: '25px 0' }} onClick={handleAddAnswer}>Додати правильну відповідь</Button>

                    </>
                    :
                    <TextField
                                value={formState.answer}
                                onChange={handleFormChange}
                                name={`answer`}
                                id={`answer`}
                                variant='outlined'
                                required
                                sx={{ margin: '25px 0', width: '100%' }}
                            />
                    )}
                
                <Typography variant='h4'>Кількість балів</Typography>
                <TextField
                    name='score'
                    id='outlined-basic'
                    variant='outlined'
                    required
                    sx={{ margin: '25px 0', width: '100%' }}
                />
                <Button onClick={handleSubmit} sx={{width: '100%', backgroundColor: '#423A34', color:'white'}}>Зберегти</Button>
            </form>
            </Box>
            
        </Container>
    );
};


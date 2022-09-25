import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// import material ui
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function CommentPage() {
    
    const dispatch = useDispatch();
    const history = useHistory();

    // value is set when comment changes
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

     // when next button is clicked value is dispatched
    const handleNext = event => {
        event.preventDefault();
        const action = {
            type: 'SET_COMMENT',
            payload: value,
        }
        dispatch(action)
        history.push("/Review")
    };

    // set card properties
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        height: "250px"
    };

    return (
        <Container maxWidth="sm">
            <Card style={cardStyle}>
                <CardContent>
                    <Stack 
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={2}>
                        <Typography variant="h6" component="div">
                            Any comments you want to leave?
                        </Typography>
                        <TextField
                            className="comments"
                            id="outlined-multiline-static"
                            label="Comments"
                            multiline
                            fullWidth
                            rows={3}
                            onChange={handleChange}
                        />
                        <Button onClick={handleNext} variant="contained">Next</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}

export default CommentPage;
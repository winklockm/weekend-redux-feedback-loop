import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// import material ui
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function SupportedPage() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    // value is set when star rating is changed
    const [value, setValue] = useState(0);

    // when next button is clicked value is dispatched
    const handleNext = event => {
        event.preventDefault();
        if(value > 0) {
            const action = {
                type: 'SET_SUPPORT',
                payload: value,
            }
            dispatch(action)
            history.push("/QuestionFour")
        }
        else {
            alert('Please select a value');
        }
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
                        spacing={5}>
                        <Typography variant="h6" component="div">
                            How well are you being supported?
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            size="large"
                            sx={{fontSize: "3rem"}}
                            className="rating"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                        <Button onClick={handleNext} variant="contained">Next</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}

export default SupportedPage;
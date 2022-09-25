import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// import material ui
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function FeelingPage() {
    
    const dispatch = useDispatch();
    const history = useHistory();

    // value is set when star rating is changed
    const [value, setValue] = useState(0);

    // when next button is clicked value is dispatched
    const handleNext = event => {
        event.preventDefault();
        const action = {
            type: 'SET_FEEL',
            payload: value,
        };
        dispatch(action)
        history.push("/QuestionTwo")
    }

    return (
        <form>
            <Typography component="legend">How are you feeling today?</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
            <div>
                <Button onClick={handleNext} variant="contained">Next</Button>
            </div>
        </form>
    )
}

export default FeelingPage;
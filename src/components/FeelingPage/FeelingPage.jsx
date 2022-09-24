import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function FeelingPage() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleNext = event => {
        event.preventDefault();
        // action is an object
        const action = {
            type: 'SET_FEEL',
            payload: value,
        };
        dispatch(action)
        history.push("/QuestionTwo")
        // TODO: clear inputs
    }

    return (
        <form onSubmit={handleNext}>
        <Typography component="legend">How are you feeling today?</Typography>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
        }}
        />
        <div>
            <button>Next</button>
        </div>
        </form>
    )
}

export default FeelingPage;
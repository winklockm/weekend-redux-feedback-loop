import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function UnderstandingPage() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const handleNext = event => {
        event.preventDefault();
        const action = {
            type: 'SET_UNDERSTAND',
            payload: {
                value,
            }
        }
        dispatch(action)
        // TODO: NEXT button leads to 
        // SupportedPage
        // TODO: clear inputs
    }

    return (
        <form onSubmit={handleNext}>
        <Typography component="legend">How well are you understanding the content?</Typography>
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
};

export default UnderstandingPage;
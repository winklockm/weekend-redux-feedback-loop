import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function SupportedPage() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleNext = event => {
        event.preventDefault();
        const action = {
            type: 'SET_SUPPORT',
            payload: value,
        }
        dispatch(action)
        history.push("/QuestionFour")
        // TODO: NEXT button leads to 
        // CommentPage
        // TODO: clear inputs
    }

    return (
        <form onSubmit={handleNext}>
        <Typography component="legend">How well are you being supported?</Typography>
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

export default SupportedPage;
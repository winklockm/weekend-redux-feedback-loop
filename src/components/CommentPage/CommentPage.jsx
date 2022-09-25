import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// import material ui
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

    return (
        <form>
            <Typography component="legend">Any comments you want to leave?</Typography>
            <TextField
                id="outlined-multiline-static"
                label="Comments"
                multiline
                rows={4}
                onChange={handleChange}
            />
            <div>
                <Button onClick={handleNext} variant="contained">Next</Button>
            </div>
        </form>
    );
}

export default CommentPage;
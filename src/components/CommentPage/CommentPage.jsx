import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function CommentPage() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleNext = event => {
        event.preventDefault();
        const action = {
            type: 'SET_COMMENT',
            payload: {
                value,
            }
        }
        dispatch(action)
        // TODO: NEXT button leads to 
        // ReviewPage
        // TODO: clear inputs
    }

    return (
        <form onSubmit={handleNext}>
        <Typography component="legend">Any comments you want to leave?</Typography>
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          onChange={handleChange}
        />
        <div>
            <button onClick={handleNext}>Next</button>
        </div>
        </form>
    )
}

export default CommentPage;
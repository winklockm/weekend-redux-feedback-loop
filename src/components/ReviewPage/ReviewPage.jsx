import {useState} from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function ReviewPage() {
    const history = useHistory();

    const feeling = useSelector(store => store.feelReducer);
    const understanding = useSelector(store => store.understandReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentReducer);

    // console.log(`feeling: ${feeling}, understanding: ${understanding}, support: ${support}, comments: ${comments}`);
    const [responses, setResponses] = useState({
            feeling,
            understanding,
            support,
            comments
    })

    const handleNext = event => {
        event.preventDefault();

        // TODO: POST TO DATABASE
        history.push("/Confirm")
    }

    return (
        <>
        <Typography component="legend">How are you feeling today?</Typography>
        <Rating name="read-only" value={responses.feeling} readOnly />

        <Typography component="legend">How well are you understanding the content?</Typography>
        <Rating name="read-only" value={responses.understanding} readOnly />

        <Typography component="legend">How well are you being supported?</Typography>
        <Rating name="read-only" value={responses.support} readOnly />

        <p>Any comments you want to leave?</p>
        <p>{responses.comments}</p>
        
        <Button onClick={handleNext} variant="contained">Submit</Button>
        </>
    )
}

export default ReviewPage;
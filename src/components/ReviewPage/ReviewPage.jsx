import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

// import material ui
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ReviewPage() {
    
    const history = useHistory();
    
    // pull in reducers
    const feeling = useSelector(store => store.feelReducer);
    const understanding = useSelector(store => store.understandReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentReducer);
    
    // put reducers in an object
    const [feedbackObject, setfeedbackObject] = useState({
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comments
    });

    // on button click POST feedback
    const handleNext = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackObject
        }).then(response => {
            console.log('POST successful!');
            history.push("/Confirm")
        }).catch(error => {
            console.log('Feedback not submitted due to:', error);
            alert('Feedback submission error. Try again later.');
        });
    }

    return (
        <>
        <Typography component="legend">How are you feeling today?</Typography>
        <Rating name="read-only" value={feedbackObject.feeling} readOnly />

        <Typography component="legend">How well are you understanding the content?</Typography>
        <Rating name="read-only" value={feedbackObject.understanding} readOnly />

        <Typography component="legend">How well are you being supported?</Typography>
        <Rating name="read-only" value={feedbackObject.support} readOnly />

        <p>Any comments you want to leave?</p>
        <p>{feedbackObject.comments}</p>
        
        <Button onClick={handleNext} variant="contained">Submit</Button>
        </>
    )
}

export default ReviewPage;
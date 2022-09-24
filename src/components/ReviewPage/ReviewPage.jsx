import {useState} from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewPage() {
    const history = useHistory();

    const feeling = useSelector(store => store.feelReducer);
    const understanding = useSelector(store => store.understandReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentReducer);

    console.log(`feeling: ${feeling}, understanding: ${understanding}, support: ${support}, comments: ${comments}`);
    const [responses, setResponses] = useState({
            feeling,
            understanding,
            support,
            comments
    })

    return (
        <>
        <p>Here is the ReviewPage</p>
        <p>How are you feeling today?</p>
        <p>{responses.feeling}/5</p>
        <p>How well are you understanding the content?</p>
        <p>{responses.understanding}/5</p>
        <p>How well are you being supported?</p>
        <p>{responses.support}/5</p>
        <p>Any comments you want to leave?</p>
        <p>{responses.comments}/5</p>
        </>
    )
}

export default ReviewPage;
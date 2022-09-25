import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';

function ConfirmationPage() {

    const history = useHistory();
    const dispatch = useDispatch();

    const startOver = event => {
        event.preventDefault();
        const action = {
            type: 'RESET'
        }
        history.push("/")
    }

    return (
        <>
        <p>Success! Your feedback has been submitted.</p>
        <Button onClick={startOver} variant="contained">Take Survey Again</Button>
        </>
    )
}

export default ConfirmationPage;
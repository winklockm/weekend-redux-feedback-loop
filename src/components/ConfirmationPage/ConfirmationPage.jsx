import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';

function ConfirmationPage() {
    const history = useHistory();
    const handleNext = event => {
        event.preventDefault();
        history.push("/")
        // TODO: clear inputs
    }

    return (
        <>
        <p>Success! Your feedback has been submitted.</p>
        <Button onClick={handleNext} variant="contained">Take Survey Again</Button>
        </>
    )
}

export default ConfirmationPage;
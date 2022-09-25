import {useHistory} from 'react-router-dom';

// import from mui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function ConfirmationPage() {

    const history = useHistory();

    const startOver = event => {
        event.preventDefault();
        const action = {
            type: 'RESET'
        }
        history.push("/")
    }

    // set card properties
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        height: "250px"
    };

    return (
        <Container maxWidth="sm">
            <Card className="card" style={cardStyle}>
                 <CardContent>
                    <Stack 
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={5}>
                        <Typography variant="h6" component="div">
                            Thank you for your feedback!
                        </Typography>
                        <Button onClick={startOver} variant="contained">Take Survey Again</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ConfirmationPage;
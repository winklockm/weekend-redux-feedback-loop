import React from 'react';
import './App.css';

// import components
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentPage from '../CommentPage/CommentPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';

// import router
import { HashRouter as Router, Route, Link} from 'react-router-dom';

// import mui theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: teal[500],
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback Survey</h1>
        </header>
        <Route exact path="/">
          <FeelingPage />
        </Route>
        <Route exact path="/QuestionTwo">
          <UnderstandingPage />
        </Route>
        <Route exact path="/QuestionThree">
          <SupportedPage />
        </Route>
        <Route exact path="/QuestionFour">
          <CommentPage />
        </Route>
        <Route exact path="/Review">
          <ReviewPage />
        </Route>
        <Route exact path="/Confirm">
          <ConfirmationPage />
        </Route>       
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;

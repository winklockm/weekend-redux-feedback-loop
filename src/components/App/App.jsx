import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentPage from '../CommentPage/CommentPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';

// import Router
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
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
  );
}

export default App;

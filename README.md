# Student Feedback Survey Loop

2 day weekend sprint

## Description

This student feedback survey allows a student to input feedback regarding their learning. Using client-side routing, the survey walks the student through each question one at a time. When a question is answered, the answer is dispatched to its corresponding reducer. After all questions are answered, the reducers are displayed for the student to review them and, upon submitting, the answered are sent via POST to the database. The student then sees a page confirming submission and an option to begin the survey again. Choosing to begin the survey again resets all the reducers.

## Screenshots
[Screenshot](/public/images/Screen%20Shot%202022-09-25%20at%204.12.40%20PM.png)

[Screenshot](/public/images/Screen%20Shot%202022-09-25%20at%204.13.20%20PM.png)

## Prerequisites

-Node.js 
-React.js
-Express
-Body-Parser
-PG
-Axios 
-VS Code
-Database manager such as Postico

## Installation

1. Fork and clone this repository to your local computer
2. Open the project folder using VSCode
3. In terminal, type npm install
4. In terminal, type npm run server
5. Open a second terminal window and type npm run client

## Useage

1. Answer each question and click the "Next" button
2. Review your submission and click "Submit Feedback"
3. Click "Take Survey Again" to take the survey again

## Built With

-React
-Redux
-Material UI
-HTML
-CSS

## Notes and Looking Ahead

This was my first solo project using Redux and also a client-side React router - I'm a big fan of both now as I see how the routing helps create a great user experience and Redux helps on the development side. I also used this project as an opportunity to explore Material UI.

In the future, I would love to take this project to the next level by learning to further personalize Material UI items. An admin page to enable an instructor to view student responses would also be a great addition.

## Acknowledgements

Many thanks to the following:

-Prime Digital Academy for helping make my software engineering dreams come true [https://www.primeacademy.io/]
-The L'Engle cohort for inspiration and support provided during the learning process

# Support

Issues? Suggestions? Feedback? I'm all ears! Please email me at [maggie.whitlock@gmail.com]